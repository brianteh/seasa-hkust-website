import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '/src/components/EventCard';
import SEO from '/src/components/SEO';
import { WebPageSchema, EventSchema } from '/src/components/StructuredData';
import Oday from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"
import SuperSmash from "/src/assets/events/SUPERSMASH/supersmash_2024.jpg"
import sea_connect_2025 from "/src/assets/events/SEA_CONNECT/sea_connect_2025.jpeg"
import sea_odyssey_2024 from "/src/assets/events/SEA_ODYSSEY/sea_odyssey_2024.JPG"
import sports_week_2024 from "/src/assets/events/SPORTS_WEEK/sports_week_2024.png"

const eventsData = [
  {
    id: 'sea-connect-2025',
    title: 'SEA Connect 2025',
    description: 'Annual networking event connecting Southeast Asian students with industry professionals and alumni.',
    date: '2025-03-15',
    location: {
      name: 'HKUST Campus',
      streetAddress: 'Clear Water Bay',
      addressLocality: 'Sai Kung',
      addressRegion: 'Hong Kong'
    },
    image: sea_connect_2025,
    price: 0
  },
  {
    id: 'sea-odyssey-2024',
    title: 'SEA Odyssey 2024',
    description: 'Cultural showcase featuring performances, food, and exhibitions from Southeast Asian countries.',
    date: '2024-11-05',
    location: {
      name: 'HKUST Atrium',
      streetAddress: 'Clear Water Bay',
      addressLocality: 'Sai Kung',
      addressRegion: 'Hong Kong'
    },
    image: sea_odyssey_2024,
    price: 0
  },
  {
    id: 'sports-week-2024',
    title: 'SEASA Sports Week 2024',
    description: 'Friendly sports competition among Southeast Asian student organizations.',
    date: '2024-10-15',
    location: {
      name: 'HKUST Sports Complex',
      streetAddress: 'Clear Water Bay',
      addressLocality: 'Sai Kung',
      addressRegion: 'Hong Kong'
    },
    image: sports_week_2024,
    price: 0
  }
];

export const EventPage = () => {
  const location = useLocation();
  const [currentEvent, setCurrentEvent] = useState(null);
  const pageUrl = `https://seasa.su.hkust.edu.hk${location.pathname}`;

  useEffect(() => {
    // Extract event ID from URL hash if present
    const eventId = location.hash.replace('#', '');
    if (eventId) {
      const event = eventsData.find(e => e.id === eventId);
      setCurrentEvent(event);
    }
  }, [location]);

  return (
    <div className="relative isolate min-h-screen">
      <SEO 
        title="Events | SEASA HKUST"
        description="Discover upcoming events organized by SEASA at HKUST. Join us for cultural celebrations, networking opportunities, and community building activities."
        keywords="SEASA events, HKUST events, Southeast Asian events, cultural events, student activities, HKUST"
      />
      <WebPageSchema 
        title="Events | SEASA HKUST"
        description="Discover upcoming events organized by SEASA at HKUST"
        url={pageUrl}
      />
      
      {currentEvent && (
        <EventSchema
          name={currentEvent.title}
          startDate={new Date(currentEvent.date).toISOString()}
          endDate={new Date(new Date(currentEvent.date).setDate(new Date(currentEvent.date).getDate() + 1)).toISOString()}
          location={currentEvent.location}
          description={currentEvent.description}
          image={currentEvent.image}
          price={currentEvent.price}
          url={`${pageUrl}#${currentEvent.id}`}
        />
      )}
      
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
            
            <div className="py-12">
                {/* Year 2025 Events */}
                <div className="max-w-6xl mx-auto px-8">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mt-6 px-6 text-6xl font-semibold">2025 Events</h2>
                            <h3 className="mt-6 text-2xl">Happiness prevails this year.</h3>
                        </div>
                    </div>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-8'>
                        <Card 
                            eventimage={Oday} 
                            eventname={"SEASA O-Day"} 
                            eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} 
                            event_link={"https://www.instagram.com/p/DAS8viFhrpF/?img_index=1"}
                        />
                        <Card 
                            eventimage={SuperSmash} 
                            eventname={"SEASA Super Smash Go"} 
                            eventdesc={"Showcase your badminton skills and challenge other players!"} 
                            event_link={"https://www.instagram.com/p/DIaUcCqz9tC/?img_index=1"}
                        />
                        <Card 
                            eventimage={sea_connect_2025} 
                            eventname={"SEASA Connect"} 
                            eventdesc={"Wisdom + Aura granted by our beloved & accomplished alumni!"} 
                            event_link={"https://www.instagram.com/p/DJtC7v8TX7P/?img_index=1"}
                        />
                    </div>
                </div>

                
                
                {/* Year 2024 Events */}
                <div className="max-w-6xl mx-auto px-8 relative">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="text-6xl font-semibold">2024 Events</h2>
                            <h3 className="mt-4 text-2xl">Best year ever!</h3>
                        </div>
                    </div>
                    
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 gap-8'>
                        <Card 
                            eventimage={sea_odyssey_2024} 
                            eventname={"SEASA Odyssey"} 
                            eventdesc={"New people, new environment, new odyssey"} 
                            event_link={"https://www.instagram.com/stories/highlights/17993240585226510/"}
                        />
                        <Card 
                            eventimage={sports_week_2024} 
                            eventname={"SEASA Sports Week"} 
                            eventdesc={"A week fill with sports is a dope week"} 
                            event_link={"https://www.instagram.com/p/C0jso1xBkZR/?img_index=1"}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default EventPage