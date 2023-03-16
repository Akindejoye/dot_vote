export const handleUniqueSet = (array: string[]) => {
  const uniqueSet = new Set(array); 
  const uniqueArray = [...uniqueSet];

  return uniqueArray;
}