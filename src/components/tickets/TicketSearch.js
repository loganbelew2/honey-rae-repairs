export const TicketSearch = ({setterFunction}) => {
    return (
        <input type="text" placeholder="Enter search terms"
        onChange={(change) => {
            setterFunction(change.target.value)
        }}
        />
    )
}