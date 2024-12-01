import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";


const ProfilePage = async () => {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;

  const orders = await getOrdersByUser({ userId, page: 1})

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  const organizedEvents = await getEventsByUser({ userId, page: 1 })

  return (
    <>

    {/* MY TICKETS */}
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <div className="wrapper flex items-center justify-center sm:justify-between">
        <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>

        <Button asChild size="lg" className="button hidden sm:flex">
          <Link href="/#events">
            Explore More Events
          </Link>
        </Button>
      </div>
    </section>

    <section className="wrapper my-8">
      <Collection 
            data={orderedEvents}
            emptyTitle="No event tickets purchased yet"
            emptyStateSubtext="No worries - plenty of exciting events to explore!"
            collectionType="My_Tickets"
            limit={3}
            page={1}
            urlParamName="ordersPage"
            totalPages={2}
          />
    </section>

    {/* PERSONAL EVENT LISTINGS */}
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <div className="wrapper flex items-center justify-center sm:justify-between">
        <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>

        <Button asChild size="lg" className="button hidden sm:flex">
          <Link href="/events/create">
            Create New Event
          </Link>
        </Button>
      </div>
    </section>

    <section className="wrapper my-8">
      <Collection 
            data={organizedEvents?.data}
            emptyTitle="You have not created any events yet"
            emptyStateSubtext="Go create something impactful!"
            collectionType="Events_Organized"
            limit={6}
            page={1}
            urlParamName="eventsPage"
            totalPages={2}
          />
    </section>
    </>
  )
};

export default ProfilePage;