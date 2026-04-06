import {ChangeDetectionStrategy, Component, HostListener, signal, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TIMELINE_DATA, ERAS, TimelineEvent} from './data';
import {animate, stagger} from 'motion';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isExploring = signal(false);
  // Sort events strictly by year
  events = signal<TimelineEvent[]>([...TIMELINE_DATA].sort((a, b) => a.year - b.year));
  eras = signal(ERAS);
  
  // Filtering state
  selectedCategory = signal<string>('all');
  categories = [
    { id: 'all', label: 'All' },
    { id: 'cosmic', label: 'Cosmic' },
    { id: 'geological', label: 'Geological' },
    { id: 'biological', label: 'Biological' },
    { id: 'prehistoric', label: 'Prehistoric' },
    { id: 'ancient', label: 'Ancient' },
    { id: 'medieval', label: 'Medieval' },
    { id: 'early-modern', label: 'Early Modern' },
    { id: 'modern', label: 'Modern' },
    { id: 'contemporary', label: 'Contemporary' },
  ];

  filteredEvents = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.events();
    return this.events().filter(e => e.category === cat);
  });

  // Current state for UI
  currentBgColor = signal('bg-slate-950');
  scrollY = signal(0);
  expandedEventIndex = signal<number | null>(null);

  startExploring() {
    this.isExploring.set(true);
    setTimeout(() => {
      this.initAnimations();
      this.onScroll(); // Initial check
    }, 100);
  }

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.initAnimations();
      this.onScroll();
    }, 100);
  }


  initAnimations() {
    const items = document.querySelectorAll('.event-item');
    if (items.length > 0) {
      animate(
        items,
        { opacity: [0, 1], y: [50, 0] },
        { 
          delay: stagger(0.1),
          duration: 0.8,
          ease: "easeOut"
        }
      );
    }
  }

  toggleEventDetails(index: number) {
    // For mobile devices, toggle the expanded state
    if (window.innerWidth <= 768) {
      this.expandedEventIndex.set(this.expandedEventIndex() === index ? null : index);
    }
  }

  isEventExpanded(index: number): boolean {
    return this.expandedEventIndex() === index;
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.isExploring()) return;

    const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
    this.scrollY.set(currentScroll);

    const anchor = currentScroll + window.innerHeight * 0.35;
    const eventElements = document.querySelectorAll('.event-item');
    const events = this.filteredEvents();

    if (eventElements.length === 0 || events.length === 0) {
      return;
    }

    let activeIndex = -1;
    let closestDist = Infinity;

    eventElements.forEach((el: Element, index: number) => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + window.scrollY + rect.height / 2;
      const dist = Math.abs(anchor - center);

      if (dist < closestDist) {
        closestDist = dist;
        activeIndex = index;
      }
    });

    if (activeIndex < 0 || activeIndex >= events.length) {
      return;
    }

    const activeEvent = events[activeIndex];

    const currentEl = eventElements[activeIndex];
    const currentRect = currentEl.getBoundingClientRect();
    const currentCenter = currentRect.top + window.scrollY + currentRect.height / 2;

    const matchingEra = [...this.eras()].reverse().find(e => activeEvent.year >= e.startYear) || this.eras()[0];

    if (this.currentBgColor() !== matchingEra.color) {
      this.currentBgColor.set(matchingEra.color);
    }
  }
}
