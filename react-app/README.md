
# Modal--App
# Modal
É atraves do Modal que coletamos informações do usuário e aumentamos o fluxo do usuário através da Aquisição do Cupom.

# Como fazer um App?
1. Faça o download do Arquivo react-app que é disponibilizado pela vtex no github (https://github.com/vtex-apps/react-app-template) 
2. insira dentro da pasta que contem a sua loja da vtex. 
3. Agora dentro da pasta (manifest.json), Mude o vendor e o name para suas configurações. 
4. Crie primeiro o link pelo terminal da sua loja e do app. 
5. Agora acesse o site da sua loja. 
6. agora vamos criar o App. 
7. Entre na pasta react e crie um arquivo .tsx por exemplo "greeting.tsx". 
8. Agora criamos uma pasta "store", dentro dela vamos criar um arquivo chamado "interface.jsonc" 
9. No arquivo interface.josonc colocamos as coisas do App. 

# Como fazer um Modal com o Cookie?
1. Agora vamos começar a Fazer o modal dentro do arquivo "greeting.tsx" 
2. Fiz um modal que Contem uma imagem do lado esquerdo e do lado direito o formulario que foi fornecido pela vtex. 
3. ![Alt paisagem](https://cdn.discordapp.com/attachments/886987574239977512/910869356047646770/Captura_de_Tela_2021-11-18_as_09.29.12.png)
4. No modal eu setei um cookie com duas condições, se eu quero que ele fique visivel primeiro é quando a pessoa entrar pela primeira vez ou quando ela acessou o site por mais de 2 min ele aparece de novo. 
5. Eu tou salvando no local storage a data da ultima vez que acessei o site, dai depois eu tou verificando se a data não existe, pq é a primeira vez dai eu seto o modal para visivel e eu tenho que seta a ultima vez que ele entrou para a data de agora. 
6. Ai tem a segunda condição que eu seto a data de agora, menos a data salva que tem que dar dois ou mais minutos para setar para visivel. 
7. Se eu apertar no x ou fora do modal ele setara invisivel por dois minutos ou mais(caso eu recarregue a pagina depois de muito tempo).
![Alt paisagem](https://cdn.discordapp.com/attachments/886987574239977512/910870094492631080/Captura_de_Tela_2021-11-18_as_09.32.29.png)
8. Agora eu coloquei ele na minha lojinha da vtex.
9. Após colocar ele na lojinha eu mexi no css dele, fui no arquivo do meu modal e coloquei os nomes para editar através do CSS_HANDLES.
10. Após isso eu fui na store-theme e entro do css eu criei um arquivo com o nome nomedaempresavtexio.nome-do-app.css e lá eu mexi em toda estilização do meu app.
11. Foi feito o App para mobile e desktop com suas modificações no CSS.
12. Desktop: 
![Alt paisagem](https://media.discordapp.net/attachments/886987574239977512/910872630624653412/Captura_de_Tela_2021-11-18_as_09.42.33.png)
13. Mobile:
![Alt paisagem](https://cdn.discordapp.com/attachments/886987574239977512/910872700350779402/Captura_de_Tela_2021-11-18_as_09.42.51.png)

# Como criar o form?
1. Primeiramente eu criei um schema in Master Data.
2. Depois eu peguei dentro da documentação da vtex o form já pronto <https://vtex.io/docs/components/content-blocks/vtex.store-form@0.7.1/>
3. Depois eu mudei o entity e clients para oque eu havia criado.
4. Depois eu mudei o pointer com o caminho do que eu havia feito no Master Data.
![Alt paisagem](https://cdn.discordapp.com/attachments/886987574239977512/910875281751965696/Captura_de_Tela_2021-11-18_as_09.53.02.png)
![Alt paisagem](https://cdn.discordapp.com/attachments/886987574239977512/910875581841801227/Captura_de_Tela_2021-11-18_as_09.53.32.png)
![Alt paisagem](https://cdn.discordapp.com/attachments/886987574239977512/910875602762989628/Captura_de_Tela_2021-11-18_as_09.53.53.png)
5. Foi feito um para desktop e um para mobile.
6. Assim que o usuário preenche o formulario ele adquire um cupom de desconto da vtex.
