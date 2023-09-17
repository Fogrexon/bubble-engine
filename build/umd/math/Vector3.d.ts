import { Matrix3 } from './Matrix3';
export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number): this;
    setFromSpherical(r: number, theta: number, phi: number): this;
    add(v: Vector3): this;
    addScalar(s: number): this;
    sub(v: Vector3): this;
    subScalar(s: number): this;
    multiply(v: Vector3): this;
    multiplyMat3(m: Matrix3): this;
    multiplyScalar(s: number): this;
    divide(v: Vector3): this;
    divideScalar(s: number): this;
    lerp(v: Vector3, t: number): this;
    dot(v: Vector3): number;
    cross(v: Vector3): this;
    lengthSquared(): number;
    length(): number;
    normalize(): this;
    distanceTo(v: Vector3): number;
    distanceToSquared(v: Vector3): number;
    clone(): Vector3;
    copy(v: Vector3): this;
    equals(v: Vector3): boolean;
}
