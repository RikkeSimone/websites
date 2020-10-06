let nextExampleId = 0

export const example = (example) => {
  return {
    type: 'ADD_EXAMPLE',
    id: nextExampleId++,
    example
  }
}
