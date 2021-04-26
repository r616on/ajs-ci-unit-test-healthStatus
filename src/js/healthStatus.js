export default function healthStatus(obj) {
  const { health } = obj;
  if (+health > 50) {
    return 'healthy';
  } if (+health > 14) {
    return 'wounded';
  }
  return 'critical';
}
