const getDates = () => {
  const start = new Date("2020-04-29");
  const end = new Date();
  const array = [];
  const date = new Date(start);

  while (date <= end) {
    array.push(
      new Date(date).toLocaleDateString("pt-BR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
    );
    date.setDate(date.getDate() + 1);
  }

  return array;
};

module.exports = {
  geral: {
    notificados: 229,
    confirmados: 10,
    descartados: 138,
    obitos: 1,
    recuperados: 4,
  },
  casos: {
    porto_nacional: {
      centro: {
        quantidade: 3,
        posicao: [-10.675660460315076, -48.40587095000001],
      },
      sao_vicente: {
        quantidade: 1,
        posicao: [-10.702477979166641, -48.40719625833333],
      },
    },
    luzimangues: {
      bairro1: {
        quantidade: 1,
        posicao: [-10.173193152826029, -48.4560472],
      },
      bairro2: {
        quantidade: 2,
        posicao: [-10.232514777499993, -48.46012003750002],
      },
    },
  },
  graficos: {
    datas: getDates(),
    confirmados: [
      1,
      1,
      1,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      7,
      7,
      7,
      7,
      7,
      7,
    ],
    obitos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  },
};
