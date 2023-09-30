import { BoxColliderComponent } from '../collider';
import { HitTest } from './HitTest';

export const boxBoxHitTest: HitTest<BoxColliderComponent, BoxColliderComponent> = (
  box1,
  box2,
  hitPoint
) => {
  const worldBox1 = box1.getWorldBox();
  const worldBox2 = box2.getWorldBox();

  if (worldBox1.left > worldBox2.right) return false;
  if (worldBox1.right < worldBox2.left) return false;
  if (worldBox1.top > worldBox2.bottom) return false;
  if (worldBox1.bottom < worldBox2.top) return false;

  const minimumTop = Math.max(worldBox1.top, worldBox2.top);
  const minimumBottom = Math.min(worldBox1.bottom, worldBox2.bottom);
  const minimumLeft = Math.max(worldBox1.left, worldBox2.left);
  const minimumRight = Math.min(worldBox1.right, worldBox2.right);

  hitPoint.set((minimumLeft + minimumRight) / 2, (minimumTop + minimumBottom) / 2);
  return true;
};
