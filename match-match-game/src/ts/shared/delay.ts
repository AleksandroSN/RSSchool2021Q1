export function delay(timeout: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, timeout);
  });
}
