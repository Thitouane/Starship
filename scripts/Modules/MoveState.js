const HAUT = Symbol('haut');
const BAS = Symbol('bas');
const IMMOBILE = Symbol('immobile');

export default class MoveState {
    static get HAUT() { return HAUT; }
    static get BAS() { return BAS; }
    static get IMMOBILE() { return IMMOBILE; }
}