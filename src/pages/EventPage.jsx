import Card from '/src/components/EventCard'

import Oday from "/src/assets/events/ODAY/odaythumbnail.jpg"
import SuperSmash from "/src/assets/events/SUPERSMASH/thumbnail.jpg"

export const EventPage = () => {
    return (
        <>
            <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl ">
                        <h2 className="mt-6 px-6 text-4xl font-semibold">2025 Events</h2>
                        <h3 className="mt-6">Click the images to find out more in detail of each event.</h3>
                    </div>
                </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5'>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>  
            </div>
            <div className="flex justify-center">
                <div className="text-center md:max-w-xl lg:max-w-3xl ">
                    <h2 className="mt-6 px-6 text-4xl font-semibold">2024 Events</h2>
                    <h3 className="mt-6">Click the images to find out more in detail of each event.</h3>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5'>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
                <Card eventimage={Oday} eventname={"SEASA O-Day"} eventdesc={"SEASA welcomes you to HKUST with a fun night of games, making friends, and of course, free food!"} event_link={"https://youtube.com"}/>
                <Card eventimage={SuperSmash} eventname={"SEASA Super Smash Go"} eventdesc={"Showcase your badminton skills and challenge other players!"} event_link={"https://youtube.com"}/>
            </div>
        
        </>
    );
}

export default EventPage