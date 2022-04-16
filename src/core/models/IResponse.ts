export  interface IResponse<T>{
    totalPassengers: number,
    totalPages: number,
    data:[T]
}
