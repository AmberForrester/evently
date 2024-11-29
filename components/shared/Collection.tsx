import { IEvent } from "@/lib/database/models/event.model";


type CollectionProps = {
  data: IEvent[],
  emptyTitle: string,
  emptyStateSubtext: string,
  limit: number, 
  page: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events"
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <div>Collection</div>
  )
};

export default Collection;