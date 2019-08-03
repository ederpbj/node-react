const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

//Origin
/* app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express Test API' });
  res.json
}); */

//Teste Rota para filmes 

app.listen(port, () => console.log(`Listening on port ${port}`));

//Teste OK
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//http://localhost:5000/
app.get('/', (req, res) => {
  res.send('OK');
  res.json({status: 'Server is running!'})
});

//Não precisa
//app.listen(3000)

//Teste 2
//https://github.com/expressjs/body-parser
/* app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
}) */

//Teste 3
const filmes = {
	"filmes": [
	{
	"data": "24/03/1972",
	"genero": "Policial, Drama",
	"link": "http://www.adorocinema.com/filmes/filme-1628/",
	"poster": "http://br.web.img3.acsta.net/medias/nmedia/18/90/93/20/20120876.jpg",
	"sinopse": "Don Vito Corleone (Marlon Brando) é o chefe de uma \"família\" de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo...",
	"sinopseFull": "\nDon Vito Corleone (Marlon Brando) é o chefe de uma \"família\" de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo \"justiça\", vingança na verdade contra membros de uma quadrilha, que espancaram barbaramente sua filha por ela ter se recusado a fazer sexo para preservar a honra. Vito discute, mas os argumentos de Bonasera o sensibilizam e ele promete que os homens, que maltrataram a filha de Bonasera não serão mortos, pois ela também não foi, mas serão severamente castigados. Vito porém deixa claro que ele pode chamar Bonasera algum dia para devolver o \"favor\". Do lado de fora, no meio da festa, está o terceiro filho de Vito, Michael (Al Pacino), um capitão da marinha muito decorado que há pouco voltou da 2ª Guerra Mundial. Universitário educado, sensível e perceptivo, ele quase não é notado pela maioria dos presentes, com exceção de uma namorada da faculdade, Kay Adams (Diane Keaton), que não tem descendência italiana mas que ele ama. Em contrapartida há alguém que é bem notado, Johnny Fontane (Al Martino), um cantor de baladas românticas que provoca gritos entre as jovens que beiram a histeria. Don Corleone já o tinha ajudado, quando Johnny ainda estava em começo de carreira e estava preso por um contrato com o líder de uma grande banda, mas a carreira de Johnny deslanchou e ele queria fazer uma carreira solo. Por ser seu padrinho Vito foi procurar o líder da banda e ofereceu 10 mil dólares para deixar Johnny sair, mas teve o pedido recusado. Assim, no dia seguinte Vito voltou acompanhado por Luca Brasi (Lenny Montana), um capanga, e após uma hora ele assinou a liberação por apenas mil dólares, mas havia um detalhe: nas \"negociações\" Luca colocou uma arma na cabeça do líder da banda. Agora, no meio da alegria da festa, Johnny quer falar algo sério com Vito, pois precisa conseguir o principal papel em um filme para levantar sua carreira, mas o chefe do estúdio, Jack Woltz (John Marley), nem pensa em contratá-lo. Nervoso, Johnny começa a chorar e Vito, irritado, o esbofeteia, mas promete que ele conseguirá o almejado papel. Enquanto a festa continua acontecendo, Don Corleone comunica a Tom Hagen (Robert Duvall), seu filho adotivo que atua como conselheiro, que Carlo terá um emprego mas nada muito importante, e que os \"negócios\" não devem ser discutidos na sua frente. Os verdadeiros problemas começam para Vito quando Sollozzo (Al Lettieri), um gângster que tem apoio de uma família rival, encabeçada por Phillip Tattaglia (Victor Rendina) e seu filho Bruno (Tony Giorgio). Sollozzo, em uma reunião com Vito, Sonny e outros, conta para a família que ele pretende estabelecer um grande esquema de vendas de narcóticos em Nova York, mas exige permissão e proteção política de Vito para agir. Don Corleone odeia esta idéia, pois está satisfeito em operar com jogo, mulheres e proteção, mas isto será apenas a ponta do iceberg de uma mortal luta entre as \"famílias\".\n",
	"titulo": "O Poderoso Chefão"
	},
	{
		"key":0,
		"data": "01/05/2019",
		"genero": "Histórico, Guerra",
		"link": "http://www.adorocinema.com/filmes/filme-9393/",
		"poster": "http://br.web.img2.acsta.net/pictures/19/04/10/19/44/2904073.jpg",
		"sinopse": "A inusitada história de Oskar Schindler (Liam Neeson), um sujeito oportunista, sedutor, \"armador\", simpático, comerciante no mercado negro, mas,...",
		"sinopseFull": "\n                      A inusitada história de Oskar Schindler (Liam Neeson), um sujeito oportunista, sedutor, \"armador\", simpático, comerciante no mercado negro, mas, acima de tudo, um homem que se relacionava muito bem com o regime nazista, tanto que era membro do próprio Partido Nazista (o que não o impediu de ser preso algumas vezes, mas sempre o libertavam rapidamente, em razão dos seus contatos). No entanto, apesar dos seus defeitos, ele amava o ser humano e assim fez o impossível, a ponto de perder a sua fortuna mas conseguir salvar mais de mil judeus dos campos de concentração.\n        \n            ",
		"titulo": "A Lista de Schindler"
	},
	{
		"key":1,
		"data": "26/08/2011",
		"genero": "Animação, Aventura",
		"link": "http://www.adorocinema.com/filmes/filme-10862/",
		"poster": "http://br.web.img2.acsta.net/medias/nmedia/18/87/84/28/19962110.jpg",
		"sinopse": "Mufasa (voz de James Earl Jones), o Rei Leão, e a rainha Sarabi (voz de Madge Sinclair) apresentam ao reino o herdeiro do trono, Simba (voz de...",
		"sinopseFull": "\nMufasa (voz de James Earl Jones), o Rei Leão, e a rainha Sarabi (voz de Madge Sinclair) apresentam ao reino o herdeiro do trono, Simba (voz de Matthew Broderick). O recém-nascido recebe a bênção do sábio babuíno Rafiki (voz de Robert Guillaume), mas ao crescer é envolvido nas artimanhas de seu tio Scar (voz de Jeremy Irons), o invejoso e maquiavélico irmão de Mufasa, que planeja livrar-se do sobrinho e herdar o trono.\n",
		"titulo": "O Rei Leão"
	}
	]
	}

app.get('/filmes', (req, res) => {
	//res.send({ express: 'Feito para Teste API!!!!!!!!!!' });
	//res.send({ filmes: 'Feito para Teste API!!!!!!!!!!' });
	res.json(filmes)
	
});


