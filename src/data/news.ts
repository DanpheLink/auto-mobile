import { NewsItem, EventItem } from '../types';

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'NASA Nepal Successfully Hosts International Astronomy Conference',
    date: 'April 15, 2025',
    excerpt: 'Over 200 scientists from 15 countries participated in the three-day conference on "Astronomy and Space Science in the Himalayan Region".',
    content: 'The conference included keynote speeches, research presentations, and workshops on various aspects of astronomy and space science. Several collaborative research projects were initiated during the conference.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'New Telescope Installed at Nagarkot Observatory',
    date: 'March 22, 2025',
    excerpt: 'A state-of-the-art 1-meter reflector telescope has been installed at our Nagarkot Observatory, enhancing our research capabilities.',
    content: 'The telescope, funded by a grant from the International Astronomical Union, will allow researchers to conduct detailed observations of distant galaxies, nebulae, and exoplanets.',
    image: 'https://images.pexels.com/photos/1383600/pexels-photo-1383600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'NASA Nepal Team Discovers New Asteroid',
    date: 'February 10, 2025',
    excerpt: 'A team of astronomers from NASA Nepal has discovered a previously unknown asteroid in the main asteroid belt between Mars and Jupiter.',
    content: 'The asteroid, temporarily designated as 2025 NP1, is approximately 5 kilometers in diameter and has an orbital period of 4.2 years. Further observations are being conducted to characterize its properties.',
    image: 'https://images.pexels.com/photos/1693645/pexels-photo-1693645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: 'World Space Week Celebration',
    date: 'October 4-10, 2025',
    location: 'Various locations across Nepal',
    description: 'Join us for a week-long celebration of space exploration with exhibitions, lectures, stargazing events, and activities for children.',
    image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Summer Astronomy Workshop for Teachers',
    date: 'June 15-20, 2025',
    location: 'NASA Nepal Headquarters, Kathmandu',
    description: 'A five-day workshop for high school science teachers focusing on astronomy education and hands-on activities for the classroom.',
    image: 'https://images.pexels.com/photos/3021120/pexels-photo-3021120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Public Lecture: Latest from Mars Rover',
    date: 'May 12, 2025',
    location: 'Nepal Academy Hall, Kathmandu',
    description: 'Dr. Lisa Clark from NASA JPL will present the latest findings from the Mars rover missions and their implications for our understanding of the red planet.',
    image: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];