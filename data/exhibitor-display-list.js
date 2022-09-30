import { createExhibitorList } from '@/util/createExhibitorList';
import { exhibitors } from './exhibitors';

export const displayList = Object.entries(createExhibitorList(exhibitors.gr));
