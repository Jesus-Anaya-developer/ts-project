(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  const createProductJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
  )

})();
