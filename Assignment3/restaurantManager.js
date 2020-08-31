class restaurantManager{
    constructor(){

    }
    restaurantList=[
        {
            Name: "Ratatoulic Restaurant",
            Address: "12 east lane, ashok nagar, Mumbai-12",
            City: "Mumbai"
        },
        {
            Name: "Classic Restaurant",
            Address: "Vasuki nagar 1st street, Old madison road, Coimbatore-4",
            City: "Coimbatore"
        },
        {
            Name: "The Sherloc Restaurant",
            Address: "West Tambaram, Demonte road, Chennai-7",
            City: "Chennai"
        },
        {
            Name: "Potter Restaurant",
            Address: "Malabar street, Babar Colony, Delhi-9",
            City: "Delhi"
        },
        {
            Name: "Potter Restaurant",
            Address: "1st Cross street, Jamad Nagar, Delhi-9",
            City: "Delhi"
        }
    ]
    printAllRestaurantNames (){
        this.restaurantList.map(res=>{
            console.log(res.Name);
        });
    }
    filterRestaurantByCity(city){
        this.restaurantList.filter((restaurant)=>{
            if(city==restaurant.City){
               console.log(restaurant);
            }
        })
    }
    
}
var res= new restaurantManager();
res.printAllRestaurantNames();
res.filterRestaurantByCity('Mumbai');
res.filterRestaurantByCity('Delhi');


