import { useEffect, useRef } from 'react';
import Card from '/src/components/EventCard';
import SEO from '/src/components/SEO';
import Oday from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"
import SuperSmash from "/src/assets/events/SUPERSMASH/supersmash_2024.jpg"
import sea_connect_2025 from "/src/assets/events/SEA_CONNECT/sea_connect_2025.jpeg"
import sea_odyssey_2024 from "/src/assets/events/SEA_ODYSSEY/sea_odyssey_2024.JPG"
import sports_week_2024 from "/src/assets/events/SPORTS_WEEK/sports_week_2024.png"

export const EventPage = () => {
  const section2025Ref = useRef(null);

  useEffect(() => {
    // If there's no hash in the URL, scroll to 2025 section
    if (!window.location.hash) {
      section2025Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Event data with dates and locations
  const events2025 = [
    {
      id: 'seasa-oday-2025',
      name: 'SEASA O-Day',
      description: 'SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!',
      image: Oday,
      link: 'https://www.instagram.com/p/DAS8viFhrpF/?img_index=1',
      date: 'September 5, 2025',
      location: 'HKUST Campus',
      time: '6:00 PM - 10:00 PM'
    },
    {
      id: 'super-smash-2025',
      name: 'SEASA Super Smash Go',
      description: 'Showcase your badminton skills and challenge other players!',
      image: SuperSmash,
      link: 'https://www.instagram.com/p/DIaUcCqz9tC/?img_index=1',
      date: 'November 15, 2025',
      location: 'HKUST Sports Hall',
      time: '2:00 PM - 6:00 PM'
    },
    {
      id: 'sea-connect-2025',
      name: 'SEASA Connect',
      description: 'Wisdom + Aura granted by our beloved & accomplished alumni!',
      image: sea_connect_2025,
      link: 'https://www.instagram.com/p/DJtC7v8TX7P/?img_index=1',
      date: 'April 10, 2025',
      location: 'HKUST Business School',
      time: '3:00 PM - 5:30 PM'
    }
  ];

  const events2024 = [
    {
      id: 'sea-odyssey-2024',
      name: 'SEASA Odyssey',
      description: 'New people, new environment, new odyssey',
      image: sea_odyssey_2024,
      link: 'https://www.instagram.com/stories/highlights/17993240585226510/',
      date: 'October 15, 2024',
      location: 'HKUST Campus',
      time: '6:00 PM - 9:00 PM'
    },
    {
      id: 'sports-week-2024',
      name: 'SEASA Sports Week',
      description: 'A week filled with sports is a dope week',
      image: sports_week_2024,
      link: 'https://www.instagram.com/p/C0jso1xBkZR/?img_index=1',
      date: 'November 20-26, 2024',
      location: 'HKUST Sports Complex',
      time: '2:00 PM - 6:00 PM Daily'
    }
  ];

  return (
    <main className="relative isolate min-h-screen" itemScope itemType="https://schema.org/ItemList">
      <SEO 
        title="Events | SEASA HKUST"
        description="Discover upcoming events organized by SEASA at HKUST. Join us for cultural celebrations, networking opportunities, and community building activities."
        keywords="SEASA events, HKUST events, Southeast Asian events, cultural events, student activities, HKUST"
        url={window.location.href}
        type="events"
      />
      {/* Background gradient - Top */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            
            {/* Background gradient - Bottom */}
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            
            <article className="py-12">
                {/* Year 2025 Events */}
                <section className="max-w-6xl mx-auto px-8" id="2025" ref={section2025Ref} itemScope itemType="https://schema.org/ItemList">
                  <meta itemProp="name" content="SEASA 2025 Events" />
                    <header className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h1 className="mt-6 px-6 text-6xl font-semibold">2025 Events</h1>
                            <p className="mt-6 text-2xl">Happiness prevails this year.</p>
                        </div>
                    </header>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-8'>
                        {events2025.map((event) => (
                          <article key={event.id} className="event-card" itemScope itemType="https://schema.org/Event">
                            <Card 
                              eventimage={event.image}
                              eventname={event.name}
                              eventdesc={event.description}
                              event_link={event.link}
                              eventDate={event.date}
                              location={event.location}
                              time={event.time}
                            />
                            <meta itemProp="name" content={event.name} />
                            <meta itemProp="description" content={event.description} />
                            <meta itemProp="startDate" content={event.date} />
                            <meta itemProp="location" content={event.location} />
                            <meta itemProp="image" content={event.image} />
                            <meta itemProp="url" content={event.link} />
                          </article>
                        ))}
                    </div>
                </section>

                {/* Year 2024 Events */}
                <section className="max-w-6xl mx-auto px-8 relative" itemScope itemType="https://schema.org/ItemList">
                  <meta itemProp="name" content="SEASA 2024 Events" />
                    <header className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="text-6xl font-semibold">2024 Events</h2>
                            <p className="mt-4 text-2xl">Best year ever!</p>
                        </div>
                    </header>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-8'>
                        {events2024.map((event) => (
                          <article key={event.id} className="event-card" itemScope itemType="https://schema.org/Event">
                            <Card 
                              eventimage={event.image}
                              eventname={event.name}
                              eventdesc={event.description}
                              event_link={event.link}
                              eventDate={event.date}
                              location={event.location}
                              time={event.time}
                            />
                            <meta itemProp="name" content={event.name} />
                            <meta itemProp="description" content={event.description} />
                            <meta itemProp="startDate" content={event.date} />
                            <meta itemProp="location" content={event.location} />
                            <meta itemProp="image" content={event.image} />
                            <meta itemProp="url" content={event.link} />
                          </article>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
};

export default EventPage;