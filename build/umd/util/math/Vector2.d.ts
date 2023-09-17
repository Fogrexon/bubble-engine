export declare class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): this;
    setVector2(vector2: Vector2): this;
    setScalar(scalar: number): this;
    copy(vector2: Vector2): this;
    clone(): Vector2;
    add(x: number, y: number): this;
    addVector2(vector2: Vector2): this;
    addScalar(scalar: number): this;
    sub(x: number, y: number): this;
    subVector2(vector2: Vector2): this;
    subScalar(scalar: number): this;
    mul(x: number, y: number): this;
    mulVector2(vector2: Vector2): this;
    mulScalar(scalar: number): this;
    div(x: number, y: number): this;
    divVector2(vector2: Vector2): this;
    divScalar(scalar: number): this;
    dot(x: number, y: number): number;
    dotVector2(vector2: Vector2): number;
    cross(x: number, y: number): number;
    crossVector2(vector2: Vector2): number;
    length(): number;
    length2(): number;
    normalize(): this;
}
