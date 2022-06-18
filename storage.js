class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity = 'Lahore'
        this.defaultState = 'PK'
    }

    getLocationData(){
        if(localStorage.getItem('city')===null){
            this.city = this.defaultCity
        }else{
            this.city= localStorage.getItem('city')
        }
        if(localStorage.getItem('state')===null){
            this.state = this.defaultState
        }else{
            this.state= localStorage.getItem('city')
        }
        return {
            'city':this.city,
            'state':this.state
        }
    }
    setLocationData(city,state){
      localStorage.setItem('city',city)
      localStorage.setItem('state',state)
    }

    
}