const text = `
  Researchers are still figuring out where coffee’s health benefits come from. But, surprisingly, they’ve ruled out a connection to caffeine. A double-shot of research, reported in a 2017 issue of Annals of Internal Medicine, linked coffee — regular and decaf — to longer life and reduced risk of death from all causes.


One of the studies, billed as the largest of its kind, looked at coffee consumption and mortality among 521,330 people across Europe. The researchers discovered the following:


“Higher coffee consumption was associated with a lower risk of death from any cause, and specifically for circulatory diseases, and digestive diseases,” said lead author Marc Gunter, a nutrition expert at the International Agency for Research on Cancer. “Drinking more coffee was [also] associated with a more favorable liver function profile and immune response,” Gunter says.“Importantly, these results were similar across all of the 10 European countries, with variable coffee drinking habits and customs.”


The other 2017 study made a similar analysis of more than 215,000 people, but expanded the heretofore limited ethnic breadth of coffee research: “Drinking coffee was associated with a lower risk of death due to heart disease, cancer, stroke, diabetes, and respiratory and kidney disease for African-Americans, Japanese-Americans, Latinos and whites.”


“This study is the largest of its kind and includes minorities who have very different lifestyles,” says lead author Veronica Setiawan, an associate professor of preventive medicine at the University of Southern California’s Keck School of Medicine. “Seeing a similar pattern across different populations gives stronger biological backing to the argument that coffee is good for you whether you are white, African-American, Latino or Asian.”


Setiawan, who enjoys a cup or two a day, speculates on why coffee seems to be good for us:


“Coffee contains a lot of antioxidants and phenolic compounds that play an important role in cancer prevention,” she says. “Although this study does not show causation or point to what chemicals in coffee may have this ‘elixir effect,’ it is clear that coffee can be incorporated into a healthy diet and lifestyle.”


Antioxidants and other compounds in coffee have, in fact, been linked to reduced inflammation, as free radicals in the body are tamed, possibly lowering the risk of many illnesses. However, specific research on these mechanisms — and thus why coffee appears to be beneficial — remains elusive.
`;



// console.log(textPunctuationRemoved);

const wordCloud = (text) => {
  let textChanged = text.toLowerCase();
  let textPunctuationRemovedArray = textChanged.replace(/[“.,\/#!$%\^&\*;:{}=\-—_`~()]/g,"").split(" ");
  const hash = {};
  for (let word of textPunctuationRemovedArray) {
    hash[word] = hash[word] + 1 || 1;
  }
  console.log(hash);
}

wordCloud(text);