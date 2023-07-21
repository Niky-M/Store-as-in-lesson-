import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Sumsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 100000, raiting: 5, img: '' },
            {id: 2, name: 'Iphone 12 pro', price: 100000, raiting: 5, img: '' },
        ]
        makeAutoObservable(this)
    }

    setTypes (types) {
        this._types = types
    }
    setUser(brands) {
        this._brands = brands
    }
    setUser(devices) {
        this._devices = devices
    }

    getTypes(){
        return this._types
    }
    getBrands(){
        return this._brands
    }
    getDevices(){
        return this._devices
    }
}