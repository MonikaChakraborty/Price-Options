import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Standard workout equipments",
              "Limited gym hours",
              "Access to locker room"
            ],
            "price": 30
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Full range of workout equipment",
              "Group fitness classes",
              "Personalized workout plan",
              "Extended gym hours",
              "Access to locker room"         
            ],
            "price": 50
          },
          {
            "id": 3,
            "name": "Family Membership",
            "features": [
              "Discounts on nutrition supplements",
              "24/7 gym access",
              "Access to sauna and spa",
              "Towel service",
              "Access to locker room"
            ],
            "price": 90
          },
        //   {
        //     "id": 4,
        //     "name": "Student Membership",
        //     "features": [
        //       "Access to cardio and strength training equipment",
        //       "Unlimited use of locker rooms and showers",
        //       "Valid student ID required"
        //     ],
        //     "price": 19.99
        //   },
        //   {
        //     "id": 5,
        //     "name": "Senior Membership",
        //     "features": [
        //       "Access to cardio and strength training equipment during off-peak hours",
        //       "Senior fitness classes",
        //       "Social events and gatherings"
        //     ],
        //     "price": 24.99
        //   }
        ]
      
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)  
                }
            </div>
            
        </div>
    );
};

export default PriceOptions;