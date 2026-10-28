import * as images from '@/assets/images.js'

export const events2025 = [
  {
    id: 'seasa-oday-2025',
    name: 'SEASA O-Day',
    description: 'SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!',
    image: images.odayThumbnail2024,
    link: 'https://www.instagram.com/p/DAS8viFhrpF/?img_index=1',
    date: 'September 5, 2025',
    startDate: '2025-09-05T18:00:00+08:00',
    endDate: '2025-09-05T22:00:00+08:00',
    location: 'HKUST Campus',
    time: '6:00 PM - 10:00 PM',
  },
  {
    id: 'super-smash-2025',
    name: 'SEASA Super Smash Go',
    description: 'Showcase your badminton skills and challenge other players!',
    image: images.superSmash2024,
    link: 'https://www.instagram.com/p/DIaUcCqz9tC/?img_index=1',
    date: 'November 15, 2025',
    startDate: '2025-11-15T14:00:00+08:00',
    endDate: '2025-11-15T18:00:00+08:00',
    location: 'HKUST Sports Hall',
    time: '2:00 PM - 6:00 PM',
  },
  {
    id: 'sea-connect-2025',
    name: 'SEASA Connect',
    description: 'Wisdom + Aura granted by our beloved & accomplished alumni!',
    image: images.seaConnect2025,
    link: 'https://www.instagram.com/p/DJtC7v8TX7P/?img_index=1',
    date: 'April 10, 2025',
    startDate: '2025-04-10T15:00:00+08:00',
    endDate: '2025-04-10T17:30:00+08:00',
    location: 'HKUST Business School',
    time: '3:00 PM - 5:30 PM',
  },
]

export const events2024 = [
  {
    id: 'sea-odyssey-2024',
    name: 'SEASA Odyssey',
    description: 'New people, new environment, new odyssey',
    image: images.seaOdyssey2024,
    link: 'https://www.instagram.com/stories/highlights/17993240585226510/',
    date: 'October 15, 2024',
    startDate: '2024-10-15T18:00:00+08:00',
    endDate: '2024-10-15T21:00:00+08:00',
    location: 'HKUST Campus',
    time: '6:00 PM - 9:00 PM',
  },
  {
    id: 'sports-week-2024',
    name: 'SEASA Sports Week',
    description: 'A week filled with sports is a dope week',
    image: images.sportsWeek2024,
    link: 'https://www.instagram.com/p/C0jso1xBkZR/?img_index=1',
    date: 'November 20-26, 2024',
    startDate: '2024-11-20T14:00:00+08:00',
    endDate: '2024-11-26T18:00:00+08:00',
    location: 'HKUST Sports Complex',
    time: '2:00 PM - 6:00 PM Daily',
  },
]

// The three events shown on the home page (the first three 2025 events).
export const featuredEvents = [events2025[0], events2025[1], events2025[2]]
