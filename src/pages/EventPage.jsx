import Card from '/src/components/EventCard'

import Oday from "/src/assets/events/ODAY/odaythumbnail_2024.jpg"
import SuperSmash from "/src/assets/events/SUPERSMASH/supersmash_2024.jpg"
import sea_connect_2025 from "/src/assets/events/SEA_CONNECT/sea_connect_2025.jpeg"
import sea_odyssey_2024 from "/src/assets/events/SEA_ODYSSEY/sea_odyssey_2024.JPG"
import sports_week_2024 from "/src/assets/events/SPORTS_WEEK/sports_week_2024.png"

export const EventPage = () => {
    return (
        <>
            <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl ">
                        <h2 className="mt-6 px-6 text-4xl font-semibold">2025 Events</h2>
                        <h3 className="mt-6">Happiness prevails this year.</h3>
                    </div>
                </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5'>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://www.instagram.com/p/DAS8viFhrpF/?img_index=1"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://www.instagram.com/p/DIaUcCqz9tC/?img_index=1"}/>
                <Card eventimage={sea_connect_2025} eventname={"SEASA Connect"} eventdesc={"Wisdom + Aura granted by our beloved & accomplished alumni!"} event_link={"https://www.instagram.com/p/DJtC7v8TX7P/?img_index=1"}/>
            </div>              
            <div className="flex justify-center">
                <div className="text-center md:max-w-xl lg:max-w-3xl ">
                    <h2 className="mt-6 px-6 text-4xl font-semibold">2024 Events</h2>
                    <h3 className="mt-6">Best year ever!</h3>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5'>
               <Card eventimage={sea_odyssey_2024} eventname={"SEASA Odyssey"} eventdesc={"New people, new environment, new odyssey"} event_link={"https://www.instagram.com/stories/highlights/17993240585226510/"}/>
                <Card eventimage={sports_week_2024} eventname={"SEASA Sports Week"} eventdesc={"A week fill with sports is a dope week"} event_link={"https://www.instagram.com/p/C0jso1xBkZR/?img_index=1"}/>
            </div>
        
        </>
    );
}

export default EventPage