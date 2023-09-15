export function errorGenerator(error: unknown) {
  if (error instanceof ReferenceError) {
    console.error(error.message);
  } else {
    console.error('unknown error');
  }
}
