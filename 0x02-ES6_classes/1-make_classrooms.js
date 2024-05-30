import ClassRoom from './0-classroom';

/**
 * Initializes an array of classroom objects
 * @returns {@link ClassRoom}s An array of ClassRoom objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
