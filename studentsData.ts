export interface Student {
  nome: string;
  ra: string;
  turma: string;
}

// Base local de alunos — usada apenas como último fallback,
// caso Supabase e Google Sheets estejam indisponíveis.
// Gerado a partir da planilha BANCODEDADOSGERAL (BANCODEDADOSGERAL) em 07/07/2026.
export const STUDENTS_DB: Student[] = [
  // --- 6ANO A ---
  { nome: "ANA CHRYSTINA TIEKO DA PAIXAO", ra: "0001158650395sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "ALICE ALVES BRITO DA COSTA", ra: "0001157103455sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "ANA JULIA DE SOUZA LOPES", ra: "0001214947682sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "ALICE GOMES TCHANI", ra: "1164985735sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "ANA ALICE FERNANDES ALVES", ra: "1151338138sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "ALYSON SANTOS SILVA", ra: "1158648777sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ADRYANO ROBERTO MARTINS DOS SANTOS", ra: "1150683582sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "ANA LAURA FERREIRA DA SILVA", ra: "1158653426sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "ANA BEATRIZ GALDINO DA SILVA", ra: "1147491586sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "ANA CLARA MARQUES OLIVEIRA", ra: "1158651077sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "ANA CAROLINA DE MELO MANEZZI", ra: "0001150733135sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "ABNER COSTA PALACE PRADO", ra: "0001150737931sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "ALAN DIEGO QUENALLATA COCARICO", ra: "0001141542092sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "ANA LUIZA GOMES TENORIO DA SILVA", ra: "0001132603845sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "ALICE DAMIANI PEREIRA", ra: "0001214887582sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ALICE FERREIRA RAMOS", ra: "0001141547405sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "BRUNO ELIAS", ra: "0001238487166sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "AMANDA CHOQUE VICENTE", ra: "0001150772475sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "BEATRIZ NASCIMENTO DA SILVA", ra: "0001150792656sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "ANTONIO JOAO ROGATO FERREIRA", ra: "0001132085263sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ALICE FERNANDA GARCIA", ra: "0001146897510sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "ALEX SANDRO RODRIGUES ROMAO", ra: "0001132092899sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ANA CLARA DOS SANTOS OLIVEIRA", ra: "0001145761975sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "ALICE FERNANDA DUARTE BATISTA", ra: "0001150819996sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "AGATHA MAURA ROSA DE MORAES", ra: "0001122225325sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "ALEXIA KIMBERLLY SANTOS VELOSO", ra: "0001105028719sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ANA BEATRIZ DE MORAES FREITAS", ra: "112227385xsp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "ANA JULIA SANTOS SENA", ra: "114239394xsp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "ANA JULIA AMARO E SILVA", ra: "1132070776sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "ANA BEATRIZ MIRANDA LIMA", ra: "1229701837sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ALAN STEVAO DA CHAGA ROSA", ra: "1132094653sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ALAN GABRIEL ALVES DE SANTANA", ra: "113014074xsp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "BERNARDO VINICIUS SILVA OLIVEIRA", ra: "1132236940sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "ANDRE CORREIA CARDOSO", ra: "1141626391sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "ALEXANDRE BATISTA DOS SANTOS", ra: "1141439785sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "LEVY PIETRO PEREIRA MEDEIROS", ra: "1114030119sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "ALESSANDRA DANTAS DE JESUS", ra: "0001104986930sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "AMANDA SANTOS PINHEIRO", ra: "0001141548811sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "AGATHA LUDMILA KFURI MARTINS", ra: "0001120826123sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "ALANIS MENDES NATALI", ra: "0001105030763sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "ALLERSON FLAVIO SILVA SOARES", ra: "000111403275xsp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "BRYAN FERNANDES", ra: "0001132237658sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "ADRIELLY VIEIRA DE SOUZA", ra: "0001141701303sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "ALICIA KAILANY DA SILVA NOGUEIRA", ra: "000110990423xsp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "CAUE RICARDO NASCIMENTO DE LIMA", ra: "0001101285631sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "ANTONELLA ALVES XAVIER", ra: "0001214755549sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "ANA CLARA BATISTA BRITO", ra: "0001146933721sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "ARTHUR GOMES MINZE", ra: "0001206277324sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "ALLAN SOUZA SANTOS", ra: "1164988220sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "ANA CLARA FERNANDES ALVES", ra: "1151338369sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "BRENDON CARVALHO ALVES", ra: "1214865343sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ALLICE EVANGELISTA DE MOURA", ra: "1158648510sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "ARTHUR PIETRO DIAS SILVA", ra: "1203586292sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "AYLA EDUARDA SILVA LINS", ra: "1152580036sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "ANA PAULA PINTO MENDOZA", ra: "1214959131sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "AQUILES HENRIQUE LOPES SILVA", ra: "0001150725205sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "ADILSON SIQUEIRA DE SOUZA", ra: "0001164982369sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "BEATRIZ FRANCO PEREIRA", ra: "0001158661526sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "ANTHONY TEVES ALCANTARA", ra: "0001164997932sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "ANNA BEATRIZ OLIVEIRA DE SOUZA", ra: "0001150732994sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ALICE SANTOS CAHEN", ra: "0001150748096sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "ELIZ REGINA DE OLIVEIRA", ra: "0001125773534sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ANA BEATRIZ TAVARES FRANCO DO NASCIMENTO", ra: "0001158649903sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "CAMILY VITORIA AGUIAR CRUZ", ra: "0001158773985sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "BEATRIZ NADIR OLIVEIRA SANTOS", ra: "0001109826345sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ANA CLARA MARQUES PINHEIRO", ra: "000113223606xsp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "AMANDA BEATRIZ DE SOUSA SILVA", ra: "0001126084086sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ANA CLARA LOPES LARANJEIRA", ra: "0001141437508sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "ANA CLARA SOUZA FINOTI", ra: "0001163582876sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "ARTHUR CASTRO SILVA", ra: "0001122238228sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "ARTHUR DANIEL FARIAS DE ALMEIDA", ra: "0001141919801sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ANA CLARA FERREIRA FREITAS", ra: "1122244757sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "BEATRIZ COSTA DOS SANTOS", ra: "1122108667sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "ARTHUR HENRIQUE BARBOSA GUIMARAES", ra: "1141651105sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "ANA JULIA SANTOS SENA", ra: "114239394xsp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ANA KAROLINA MENDES MARTINS", ra: "1166595262sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ANA CAROLINA CRUZ", ra: "1122169401sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "BIANCA ELIAS BATISTA", ra: "1141451359sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "BRAYAN SANTA ROSA DE OLIVEIRA", ra: "1259591281sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "ANA LIVIA BRAGA DOS SANTOS", ra: "1122248246sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "ANA JULIA RODRIGUES DA SILVA", ra: "1122242311sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "AMANDA REGINA RODRIGUES", ra: "000112969379xsp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "ANA CLARA FRANCISCO SILVA", ra: "0001122225660sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "ANA VITORIA ALMEIDA SANTOS", ra: "0001101285606sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "ANA BEATRIZ CARUSO MARINHO", ra: "0001132178952sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "ANA CLARA MACEDO OLIVEIRA", ra: "0001101287755sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "CECILIA TRINDADE SILVA", ra: "000111698426xsp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "ANA CAROLINA SILVA CAFFARO", ra: "0001132224962sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "ALISON VINICIUS DE SOUZA", ra: "0001122203949sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "DANIEL DA SILVA NEVES", ra: "0001141567118sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "ARTHUR DANIEL MASSAKI LIMA", ra: "0001214837864sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "ANA CLARA DOS SANTOS BRANDAO", ra: "0001223588555sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "BRAYAN DE OLIVEIRA LOPES", ra: "0001165008300sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "BERNARDO RANCAN PINHEIRO DE MORAIS", ra: "1165004720sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "APOLLO GODOY VIANA", ra: "1214868046sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "EMILLYN CRISTINE DE ALMEIDA ROCHA", ra: "1165030044sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ANNA JULIA MORAIS DE SOUZA", ra: "1158656245sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "ARTHUR SOUSA GOMES", ra: "1254079956sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "DAVI BENJAMIM ABADE", ra: "1165016199sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "ANTHONY DOS SANTOS RAMOS", ra: "1158656567sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "BEATRIZ PEREIRA DA SILVA", ra: "0001141546176sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "AGATHA ANDRADE SANTOS", ra: "0001150734218sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "BRYAN DERICK ALVES RIBEIRO", ra: "0001125571044sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "ARTHUR GONCALVES DE OLIVEIRA", ra: "0001141693240sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "ARTHUR MARCHETTI DUTRA", ra: "0001165002322sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ALICY ANDREIA PEREIRA DO CARMO", ra: "0001141442747sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "GABRIEL RODRIGUES DO NASCIMENTO", ra: "0001132159453sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ANA CLARA MENDES GONCALVES DIAS", ra: "0001158651090sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "DIEGO DA SILVA", ra: "0001132213885sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "BENJAMIN LUCAS LOBO MACHADO", ra: "0001246564658sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ANA CLARA SANTANA DE OLIVEIRA", ra: "0001137062642sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "ANA CLARA CALEIROS MEIRA", ra: "0001132133166sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ANA LUIZA CHAVES FERNANDES", ra: "0001150812424sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "ANA JULIA SANTOS DE FREITAS", ra: "0001158653062sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "BRENDA RAMALHO DE SOUZA", ra: "0001162618279sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "ARTUR HENRIQUE DA CRUZ", ra: "0001130214254sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ANA JULIA AMARO E SILVA", ra: "1132070776sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "BRUNO HENRIQUE MENDES SANTANA", ra: "1122238769sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "CAIO JERONIMO DA SILVA", ra: "1141647710sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "ANNA LUIZA MARIANO NUNES", ra: "1129345257sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ANALICE SOUZA SCHRAMM", ra: "1141513663sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ANA CAROLINA DE JESUS MAIA", ra: "114220392xsp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "CHAIENY MARIANA DINIZ SATURNINO", ra: "1141569279sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "CLARISSA SANTOS DE SANTANA", ra: "1215821773sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "CARLOS EDUARDO MARTINS DA SILVA", ra: "1141492003sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "CRISLANE FERREIRA DOS SANTOS", ra: "1132053894sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "ANA JULIA DA SILVA VASCONCELOS", ra: "0001142670363sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "ANNA AKEMY AMARO DA SILVA", ra: "0001122249780sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "CLARA QUOOS TUBAROSKI PRADO", ra: "0001109501389sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "BRENDA STEFANI FORTUNATO LINO DA SILVA", ra: "0001132238894sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "ANA LIVIA BRAGA DOS SANTOS", ra: "0001122248246sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "DEBORA FERNANDA COSTA PAULISTA", ra: "0001095767410sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "ANA CLARA NARCISO FIGUEIREDO RIBEIRO", ra: "0001096546024sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "ARTHUR COSTA DE SOUZA", ra: "0001104893162sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "FABRICIO MARTINS OLIVEIRA", ra: "000112227967xsp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "BARBARA CRISTINA FERREIRA DA SILVA", ra: "0001230203643sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "ANNA JULIA CARVALHO MARQUES", ra: "0001214874113sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "CARLOS HENRIQUE ROSA PAULINO", ra: "0001150669135sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "BRENO JUNIOR ALMEIDA MARTINS", ra: "1158663456sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "BRENDA SANTOS DE SOUZA", ra: "1204470042sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "ENZZO MEIRA NUNES", ra: "1216170630sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ARIO PHILLYPI RODRIGUES PERDIGAO", ra: "1164998055sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "ASAPH AQUINO QUEIROZ DE SOUZA", ra: "1200487631sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "DAVI DE SOUZA OLIVEIRA", ra: "1141661020sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "BEATRIZ MELO ROCHA", ra: "1153089750sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "CAMILLY VITORIA SILVA FERREIRA", ra: "0001165010902sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "ALICE DE ANDRADE DA SILVA", ra: "0001153999882sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "DAVI LUCAS DA SILVA SANTOS", ra: "0001158779902sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "BARBARA IGNACIO SANCHES FERREIRA", ra: "0001156043037sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "BRENO FIGUEREDO DA SILVA", ra: "0001150725047sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ALLICE DA SILVA PEREIRA", ra: "0001200072005sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "GABRIEL SILVA ROGATO", ra: "0001132171362sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ARTHUR DO NASCIMENTO PERES", ra: "000114701467xsp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "EMANUELLE NASCIMENTO BORROMEU", ra: "000115878885xsp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "BRYAN FERNANDES SILVA", ra: "0001141636906sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ANDRE SOBRAL DO NASCIMENTO", ra: "0001132231772sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "ANA CLARA PAULINA SILVA", ra: "0001132229297sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ARIANE MARTINS DE OLIVEIRA POTENZA", ra: "0001132095529sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "ANDRE FELIPE SODRE VIEIRA", ra: "0001117996505sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "BRENO HENRIQUE RAMOS PROFIRO", ra: "0001150770922sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "BARBARA LIMA MIGLIARI", ra: "0001130292113sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ARTHUR HENRIQUE BARBOSA GUIMARAES", ra: "1141651105sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "CAROLYNA FARIA SILVA", ra: "1122273915sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "DAFNY DOS SANTOS RAMOS", ra: "1122225416sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "BEATRIZ COSTA DOS SANTOS", ra: "1122108667sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ANGELINA GABRIELLA DE LIMA MARQUES DA SILVA", ra: "1122120424sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ANA VITORIA TELES", ra: "1142151086sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "FELIPE COSTA PAULISTA", ra: "1095603176sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "DERRYCK DELPHINO LOPES DA SILVA", ra: "1132035818sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "DENIS CASTRO DURVALDO", ra: "1132474152sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "FELIPE FERREIRA LUCIANO", ra: "1122175152sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "ANA JULIA MIRANDA ROSSI", ra: "0001132224056sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "BRENDA ROSA MARTINS", ra: "0001141440003sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "CLARISSA ALVES RIBEIRO SANTOS", ra: "0001089933745sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "CAIO HENRIQUE PEREIRA DE MORAIS", ra: "0001132122326sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "ANGELICA HINTZ PIRES", ra: "0001132223805sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "ELAINE CRISTINA DE OLIVEIRA", ra: "0001215652689sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "ANA RODRIGUES FERREIRA", ra: "0001121639112sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "BARBARA LUISA RODRIGUES DOS SANTOS", ra: "0001122098030sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "FLAVIO HENRIQUE DE ANDRADE CHAGAS", ra: "0001146898435sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "BERNARDO GOMES ANDRADE DE OLIVEIRA", ra: "0001214940389sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "DAVI HENRIQUE SILVA DE MELO", ra: "0001158779069sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "DAVI LUCAS DE SOUZA SILVA", ra: "0001158779859sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "DAVI LUIS LISBOA GAMA", ra: "1207003761sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "DAVI MIGUEL HONORATO OLIVEIRA DOS SANTOS", ra: "1229914675sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "HELOISA DOS SANTOS", ra: "1155539783sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ARTHUR CESAR ALCANTARA PAULINO", ra: "1158657651sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "DAVI HENRIQUE SANTOS REIS", ra: "115067264xsp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "DAVI LUCCA ABREU PEREIRA", ra: "1158781039sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "DAVI LUIZ CARVALHO BUENAVENTURA", ra: "115877963xsp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "CASSIELY PAOLA ZEGARRA MAYTA", ra: "0001141528538sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "ARTHUR LUNGA MARQUES", ra: "0001165612446sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "FABRICIO DE ALMEIDA GOIS", ra: "0001208321298sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "BEATRIZ DENISLEI SAMPAIO VARELLA", ra: "0001132233380sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "DANIEL OLIVEIRA DE ARAUJO", ra: "0001165014828sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ANA LUIZA ZAMAI ZEFERINO", ra: "0001166091533sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "GABRIELLY ALVES DO COUTO", ra: "0001149504857sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ARTHUR MOLINA DA SILVA", ra: "0001150796030sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "ENZO RODRIGUES TEIXEIRA", ra: "0001158790156sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "CARLOS EDUARDO SILVA COSTA", ra: "0001117868941sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "DANIEL MATOS MARTINIANO DA SILVA", ra: "0001122271451sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "CAMILI FERREIRA VASCONCELOS", ra: "0001132229248sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "BRUNA VITORIA DA MOTA OLIVEIRA", ra: "0001104893149sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "ARTHUR VARGAS DE SOUZA SILVA", ra: "0001132144474sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "CARLOS EDUARDO GOMES DA SILVA", ra: "0001114024545sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "BHIANY SILVA ARAUJO", ra: "0001129959399sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "BIANCA FERREIRA DE SOUZA", ra: "1132050133sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "FLAVIANO JACQUES DE OLIVEIRA JUNIOR", ra: "1243270093sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "DAVI GERMANO SANTOS", ra: "1118829657sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "CAROLYNA FARIA SILVA", ra: "1122273915sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ARTHUR SAMPAIO GALLI", ra: "1129400943sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "BENEDITO CARVALHO CARNEIRO RODRIGUES DA SILVA", ra: "1141497967sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "GABRIEL NASCIMENTO GARCIA", ra: "1253747192sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "ENZO SANDER RAMOS", ra: "1141600754sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "DYESSICA MAYARA DOS SANTOS GOMES", ra: "1141700888sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "GABRIELLY KIMBERLY ALVES RODRIGUES", ra: "1135164514sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "BEATRIZ BRITTO MUNIZ", ra: "0001132057292sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "BRUNA SANTANA DOS SANTOS OLIVEIRA", ra: "000113217692xsp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "DANIEL ISAQUE VICENTE ARIELO", ra: "0001111282924sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "CAMILA FERNANDES SOUZA", ra: "0001122207621sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "BRUHNO SANTOS RODRIGUES", ra: "0001122201746sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "FABIO LUIZ ARAUJO FONSECA", ra: "0001117660746sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "BRENO LOPES DA SILVA", ra: "0001122172072sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "BIANCA PRADO LANZA", ra: "0001129990527sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "GUILHERME MESSIAS LIMA", ra: "0001101285692sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "BYANCA DOS SANTOS PEREIRA", ra: "0001165009675sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "DAVI LUIZ CARDOSO BARBOSA", ra: "000115878112xsp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "DAVI LUCAS MATIAS RIBEIRO", ra: "0001165019024sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "DAVI LUIZ CIPRIANO PANZA", ra: "1213978853sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "EMELI VITORIA SANTOS FERNANDES", ra: "1158786293sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "IURY ROCHA LIMA", ra: "1154782931sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "BIANCA ALMEIDA MARTINS", ra: "1158661708sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "FELIPE TRINDADE QUEIROZ", ra: "1158794721sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "ELIAS ANTONIO MARTINEZ BRUZUAL", ra: "121858385xsp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "GEOVANA GUILHERMINO DE ALMEIDA", ra: "1150683429sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "DIONATHAN DA SILVA RODRIGUES NEVES", ra: "0001141638459sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "BEATRIZ BARBOSA SANCHES", ra: "0001132220981sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "GABRIELA NASCIMENTO BERNEGOSSO", ra: "0001165042903sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "BEATRIZ GODOI SOUZA", ra: "0001150719965sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "DAVI ARAUJO LUNA", ra: "0001141454245sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ANTONI HIGINO DOS SANTOS", ra: "0001141655883sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "GIOVANA BARBOZA DA COSTA", ra: "0001141509969sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ARTHUR SANTOS RODRIGUES", ra: "0001150761866sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "FLAVIA DA SILVA ANDRADE", ra: "0001150802972sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "DANIEL ALESSANDRO THOME DE SOUZA", ra: "0001132081683sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "DANIELA DA SILVA FERNANDES", ra: "000115081794xsp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "CAROLINA CONCEICAO MENEZES", ra: "0001132085688sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "BRUNO GOMES DINIZ", ra: "0001122262772sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "BEATRIS APARECIDA SILVA SOUZA", ra: "0001150823586sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "DANIELLE OLIVEIRA DA SILVA NUNES", ra: "0001122096756sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "DANIEL ALMEIDA TESTONI", ra: "0001141496446sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "CAIO JERONIMO DA SILVA", ra: "1141647710sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "FRANCISCO HERLLON FERREIRA DA SILVA", ra: "1263668926sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "ENZO CAVALCANTI ANTUNES", ra: "1103762072sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "FLAVIANO JACQUES DE OLIVEIRA JUNIOR", ra: "1243270093sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "AYSLA KAROLINE NUNES LEAL FERNANDES", ra: "1122900399sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "CESAR EDUARDO DA SILVA ZACARIAS", ra: "115083805xsp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "GRAZIELA ARANDA DA SILVA", ra: "1101287810sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "FABIANO DO NASCIMENTO DOS SANTOS", ra: "114146486xsp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "EDUARDO CARRASCOSA PINTOR", ra: "1132133828sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "GEOVANNA SANTOS ANDRADE", ra: "1122183215sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "ENZO SAMUEL MAXIMO BOLSANELLI", ra: "0001132047390sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "CLARA SOLIDADE FREIRE", ra: "0001109996056sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "EDUARDA DOS SANTOS MAXIMIANO", ra: "0001122206574sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "CAMILLY BRUSAFERRO MARAO", ra: "000113205767xsp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "DANILO ARAUJO DOS SANTOS", ra: "0001122109854sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "FELLIPE ALVES MARCAL PEDRO", ra: "0001135625438sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "CAMILLA RAULINHO DINIZ ROBERTO", ra: "0001132242174sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "CLARA DIAS DESTRO", ra: "0001132052385sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "GUSTAVO LIMA RODRIGUES", ra: "0001103142513sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "CARMEN LUCIA ARDAYA PEREIRA", ra: "0001260153812sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "ELOAH OLIVEIRA DE SOUZA", ra: "0001254730618sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "DAVI SOUSA OLIVEIRA", ra: "0001165022400sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "FERNANDA BORGES DOS SANTOS", ra: "1158794812sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "ISABELLA HUANCA DAVILA SILVA", ra: "1165057979sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "JEFFERSON NUNEZ BECERRA", ra: "1243906078sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "BIANCA ROSA DA SILVA", ra: "1165005323sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "ISABELLE NOVAES DE SOUSA", ra: "124770404xsp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "ENZO BARBOSA DE MELO OLIVEIRA", ra: "1206415538sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "GIULIA EMANUELLY JARDIM NASCIMENTO", ra: "1158801166sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "EDUARDO NOGUEIRA PEDRA DA SILVA", ra: "0001165025619sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "CARLOS EDUARDO DA SILVA SANTOS", ra: "0001145168358sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "GABRIELLA THOME DE SOUZA", ra: "0001141658768sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "BEATRIZ SANTOS DE SOUZA", ra: "0001207952953sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "DAVI BORGES DOS SANTOS", ra: "0001141690925sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "BRYAN WILLIAN LIMA BARBOSA", ra: "0001150784350sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "GUILHERME LIMA DA SILVA", ra: "0001166098485sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "CARLOS EDUARDO ALVES XAVIER", ra: "000115082721xsp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "GABRIEL DA SILVA BORROMEU", ra: "0001200000092sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "EDSON HENRIQUE DE SOUZA FERNANDES", ra: "000113480149xsp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "DANYLLO SOUZA RODRIGUES", ra: "0001132236174sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "DANIEL BORGES ALVES DOS SANTOS", ra: "0001150815139sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "CRISTOPHER PEGORARO DA CRUZ", ra: "000114166317xsp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "BEATRIZ GOMES NOVAIS", ra: "0001132221973sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "DAVI GOMES SANCHES", ra: "0001150819480sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "DAVID GABRIEL ALVES ROGER", ra: "0001132228608sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "DAFNY DOS SANTOS RAMOS", ra: "1122225416sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "GEOVANNA DE SOUZA PIZZI GOMES", ra: "1114017656sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "FELIPE ALVES BARBOSA", ra: "1139004153sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "FRANCISCO ALMEIDA ROCHA", ra: "1141510340sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "BEATRIZ VITORIA PACHECO NASCIMENTO", ra: "112226012xsp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "DAVI MARQUES RIBEIRO", ra: "112229573xsp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "JULIA ARAUJO DE LIMA", ra: "1101366886sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "GABRIELLY MARQUES BORGES SOARES", ra: "1142438090sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "ELOYSA ANDRADE OLIVEIRA SILVA", ra: "1103565242sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "GIOVANNA ROSALEN DE ALMEIDA", ra: "1111234024sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "FELIPE FERREIRA LUCIANO", ra: "0001122175152sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "DANIELLY DA SILVA NASCIMENTO", ra: "0001122173106sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "EVERTON LUCINDO AREAO", ra: "0001117880254sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "CLARA ALVES DIAS", ra: "0001141656966sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "ESTEFANY TRINDADE SILVA", ra: "0001141687021sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "GABRIEL DA SILVA ARAUJO", ra: "0001132122028sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "CAUE VALVERDE DOS SANTOS", ra: "0001112654422sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "DIEGO LUCAS MENDES", ra: "0001122216816sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "HENRIQUE CORAZZA DE MENEZES", ra: "0001122295492sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "DANIEL DA SILVA MARQUES", ra: "0001158776846sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "ESTHER ARAUJO DE OLIVEIRA", ra: "0001206732696sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "FELIPE GABRIEL ALVES ARAUJO", ra: "0001155562628sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "GUILHERME OLIVEIRA SILVA", ra: "1158803680sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "LEONARDO FURINI FERNANDES JUNIOR", ra: "1158852332sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "JIMMY HENRIQUE RIBEIRO GOMES", ra: "1219803601sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "BRYAN HENRIQUE LUNIS DE OLIVEIRA", ra: "1165008658sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "JOYCE VITORIA DE SOUZA SANTOS", ra: "1150683466sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "ENZO GROGGIA NERES", ra: "1214781986sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "GUILHERME DA SILVA FRANCA", ra: "1165047834sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "ERIK PATRIK NARCISO DA SILVA ANDRADE", ra: "000115075400xsp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "EDSON CARLOS TEIXEIRA NARCIZO LICA", ra: "0001158783929sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "GABRIELLY VITORIA SOUZA BORGES FAVARO", ra: "0001141660015sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "BRUNO HERNANDES FIDENCIO", ra: "0001165008361sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "DAVI LEAL DELATORRE RESENDE", ra: "000120836313xsp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "CAMILLY VITORIA ALVES DOS SANTOS", ra: "0001132235765sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "GUSTAVO GUILHERMINO DE ALMEIDA", ra: "0001132225693sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "DAVI NOGUEIRA DOS SANTOS", ra: "0001147764220sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "GABRIELE CRISTINA PIRES DA SILVA", ra: "000115077129xsp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "ERICA LIMA MARIANO", ra: "000112222543xsp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "EDYGAR PEREIRA GONELLI", ra: "0001141441147sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "DANIEL FORTUNATO LINO DA SILVA", ra: "0001141635331sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "DEREK DOS SANTOS NASCIMENTO", ra: "0001134836223sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "BRUNO GABRIEL ESTEVAO DE CAMPOS", ra: "0001141659438sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "FARUK PAULO FORTALEZA SANTOS", ra: "0001158794629sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "ELLEN PEREIRA DA SILVA", ra: "0001150807799sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "DAVI GERMANO SANTOS", ra: "1118829657sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "GIOVANNA CANAVAN GALDINO", ra: "1141543266sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "FERNANDA BEATRIZ SIQUEIRA DA SILVA", ra: "1111270363sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "GEOVANNA DE SOUZA PIZZI GOMES", ra: "1114017656sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "BRUNO HENRIQUE MENDES SANTANA", ra: "1122238769sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ENZO MARTINELLI ALVES", ra: "1132227264sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "JULIA CRISTINA BARROS MORAIS", ra: "1122238629sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "GUILHERME MESQUITA SANTOS", ra: "1141534897sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "EMILLY EDUARDA BONIFACIO DE AMORIM CORREA", ra: "1141568111sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "NATALIA GOMES DE LUNA", ra: "115083724xsp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "FELIPE GODOI SOUZA", ra: "0001132192481sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "EMILLY DE SOUZA MURIANO", ra: "0001117863232sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "GIOVANNA RIBEIRO DA SILVA", ra: "0001132072281sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "EMILY SILVA DOS REIS", ra: "000113214775xsp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "FELIPE MARCONDES SILVA", ra: "000112225538xsp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "GABRIEL DOS REIS CHAVES", ra: "0001140999321sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "EMILLY OLIVA DA SILVA", ra: "0001132042604sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "EDMAR HENRIQUE DE MORAES", ra: "0001122254921sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "ISABELLA ALVES RODRIGUES DE CASTRO", ra: "0001114018442sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "DAVI LUCAS DA SILVA FEITOSA", ra: "0001165018640sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "JAMILY FERNANDA GONZALES ADUVIRI", ra: "0001153647679sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "GEOVANA SALDANHA DOS SANTOS", ra: "0001165044717sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "JESSICA DA COSTA SILVA", ra: "1156133324sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "LORENNA SANTOS DE SOUZA", ra: "1165283645sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "JOAQUIM TESSER GUEDES", ra: "1165262460sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "CAIO LUCAS DOS SANTOS", ra: "1158773262sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "JULIANA MARTINS DE SOUSA", ra: "1214876833sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "GIOVANNA VITORIA QUEIROZ CARNEIRO", ra: "1158802304sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "GUILHERME FERNANDES DE CARVALHO", ra: "1158803199sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "GABRIELA KAROLINY RODRIGUES ROCHA", ra: "0001150725199sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "ENZO IACONA HERNANDES CARDOSO", ra: "0001158789701sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "GUSTAVO KAUAN MENDES SOUZA", ra: "0001150724912sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "CAROLINE MOREIRA ROCHA", ra: "0001239274476sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "DAVI NASCIMENTO GARCIA", ra: "0001253747064sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "CLARA GOMES COSTA", ra: "0001130131439sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "JAYANE BRAGA DA SILVA", ra: "0001158823836sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "DERICK BRYAN DA SILVA SANTOS", ra: "0001156289786sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "GABRYEL DIEGO SANTOS MARTINS", ra: "0001132069208sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "FELIPE VICENTE FERNANDES", ra: "0001137153167sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "FRANCISCO YARLI ARAUJO SOUZA", ra: "0001231233989sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "DANIELE MATOS MARTINIANO DA SILVA", ra: "0001122271980sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ELOAH MYRELLA BARBOSA DA SILVA", ra: "0001141667174sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "BRYAN SOUZA BRAGA", ra: "0001131007682sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "GUILHERME PEREIRA RODRIGUES", ra: "000113208703xsp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "EMANUELLE TERSARIO GIUFFRIDA", ra: "0001130214266sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "EDUARDO LIMA EVANGELISTA", ra: "1123043528sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "GUSTAVO DE OLIVEIRA VALLOTTA", ra: "1121357106sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "FERNANDA MARQUES TEIXEIRA", ra: "1141627802sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "GIOVANNA CANAVAN GALDINO", ra: "1141543266sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "CAIO DE FIGUEIREDO MOREIRA", ra: "113021932xsp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "GABRIELA DE SOUZA ROSA", ra: "1104944327sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "KAUE ALVES FERNANDES", ra: "1126475683sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "JENIFFER CAROLINI MACEDO ANJOS", ra: "1122113493sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "FELIPE MARCONDES SILVA", ra: "112225538xsp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "PEDRO MOURA BRAGA SANTOS", ra: "114146259xsp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "FELIPE JUVENAL DA SILVA", ra: "0001101467587sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "FERNANDA DE MELO MENDES CANDEO", ra: "0001139436685sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "GUSTAVO HENRIQUE FIGUEREDO OLIVEIRA", ra: "0001146283933sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "ERIC VARELA DA SILVA", ra: "0001122194456sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "GABRIEL FRANCISCO TURRA", ra: "0001145140816sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "GABRIEL MARQUES DA SILVA", ra: "0001122120722sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "GABRIEL NATANAEL NASCIMENTO DOS SANTOS", ra: "0001122257478sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "EMILY MARTINS BENEVIDES", ra: "0001122174780sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "ISABELLA GUEDES MARQUES", ra: "0001122296769sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "DIOGO SOARES FIUZA", ra: "0001206265206sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "KENNEDY GABRIEL ALVES DA SILVA", ra: "0001205132582sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "HEIDY ALISON CONDORI APAZA", ra: "0001261043868sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "JOAO LUCAS MORETAO DE SOUSA", ra: "1158825389sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "PABLO MIGUEL MARTINS DA CONCEICAO", ra: "1226051546sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "JULIA VELOSO CAMARCO", ra: "1158831535sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "DANIEL GUISELINI LUCAS", ra: "1165014361sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "JULIO CEZAR LIMA DE OLIVEIRA", ra: "1214935412sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "JEFFERSON NILO GUEDES DA SILVA", ra: "1150683296sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "HEITOR VINICIUS SILVA OLIVEIRA", ra: "1158807661sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "GIOVANNA MAIA DA SILVA", ra: "0001150733184sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "FELIPE JUNIOR COSTA SILVA", ra: "0001138382917sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "ISABELLY ARAUJO DOS SANTOS", ra: "0001208267644sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "DANIEL TOBIAS SANTA ROSA DE OLIVEIRA", ra: "0001252261135sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "EMANUELLE AUGUSTO DE OLIVEIRA", ra: "000120802730xsp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "EDUARDO AUGUSTO BRAGA", ra: "0001141652420sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "JEFFERSON SAMUEL RODRIGUES DE SOUZA", ra: "0001150799882sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ENZO GABRIEL JARDIM NASCIMENTO", ra: "0001150769166sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "GAEL JHIMY MAMANI TUCO", ra: "0001207411413sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "FERNANDO BARROSO CALADO", ra: "0001129675828sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "GABRIEL CIPRIANO PANZA", ra: "0001132844605sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "EDUARDO PAIVA DE FRANCA", ra: "0001132163845sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "EMILLY ANTONY DIXINI DE OLIVEIRA CALSAVARA", ra: "0001147921180sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "CARLOS HENRIQUE GUBEREV FRAGA", ra: "0001141642426sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "GUILHERME SILVA DOS SANTOS", ra: "0001118714453sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "EMILLY SOPHIA LOPES RIBEIRO DIAS", ra: "000113205347xsp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ENZO CAVALCANTI ANTUNES", ra: "1103762072sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "JONNATHAN DE SOUZA OLIVEIRA", ra: "1141640077sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "GABRIEL DA SILVA PIRES", ra: "113209818xsp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "ISABELLE SCHLEDER FERREIRA", ra: "1128860442sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ELIZA LOPES VIANA", ra: "113207017xsp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "HENRIQUE MARTINS DE LIMA", ra: "1114032827sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "KAUE HENRIQUE DE PAULA TAVARES", ra: "112223823xsp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "JOAO GABRIEL DE SOUSA MONTEIRO SALUSTIANO", ra: "1260733579sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "GEOVANA FERREIRA DA SILVA SOUZA", ra: "1111268939sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "PEDRO SHISHIDO FERREIRA", ra: "1141925369sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "FELLYPE SILVA DE FREITAS", ra: "0001109793212sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "GABRIELA DE SOUZA LIMA SILVA", ra: "0001122266832sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "JENNIFER CARLA DA SILVA", ra: "0001122131847sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "GABRIELA SOUZA DA SILVA", ra: "0001104928413sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "GABRIELA FERNANDES DOS REIS", ra: "000113205249xsp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "GUSTAVO BARBOSA ALMEIDA", ra: "000110327319xsp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "GABRIELLA ARCANJO PAES", ra: "0001122249767sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "ERICK MAX CHAGAS CARDOSO", ra: "0001122117309sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "JHULIA DE MORAES FURLANIS", ra: "0001122277222sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "EDUARDA SOPHIA LOPES LIMA", ra: "0001165025607sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "LAURA VITORIA JESUS SOUZA", ra: "0001158851054sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "ISABELLY DE OLIVEIRA SANTOS", ra: "0001214848709sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "LAURA DA SILVA INHESTA", ra: "1218576212sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "RICARDO HENRIQUE DA SILVA SOUZA", ra: "1222690196sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "LEONARDO DA SILVA OLIVEIRA", ra: "115075056xsp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "DEBORA VITORIA LOPES DOS SANTOS", ra: "115067944xsp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "KEVYM WILLIAM ALVES", ra: "1165274012sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "KAUAN DEREK RODRIGUES SUZART", ra: "1165270079sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "HELLOYSA VITORIA LOPES SANTOS", ra: "1150683612sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "ISABELLE RODRIGUES SANTIAGO", ra: "0001130853779sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "GUSTAVO SANTOS FERREIRA", ra: "0001141418198sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "ISABELLY RODRIGUES LINO", ra: "0001141675778sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "ENZO GABRIEL GONSALVES SANTOS", ra: "0001141617973sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "EVILLIM DE SOUZA BRAGA", ra: "000115004181xsp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ELIAS SALES DA CONCEICAO", ra: "0001214848680sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "JONATHAN BARBOSA FABRICIO", ra: "0001136726317sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "FERNANDA FERIGATI DOS REIS", ra: "0001141670239sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "GIOVANNA LUIZA GOMES DA SILVA", ra: "0001141627097sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "GABRIEL HENRIQUE FIRMINO DE OLIVEIRA", ra: "0001150819340sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "GABRIEL SALATHIEL DE LIMA", ra: "0001142611115sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "FERNANDO LUCIANO NALIN DE OLIVEIRA", ra: "000115954444xsp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ENZO ANACLETO DOS SANTOS", ra: "0001160446684sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "DIOGO MARCIANO DE CAMARGO", ra: "0001229675747sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "HENRIQUE GABRIEL DE PAULA RODRIGUES", ra: "0001150819728sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "FERNANDO BRAGA DE SOUZA", ra: "0001132159131sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "FERNANDA BEATRIZ SIQUEIRA DA SILVA", ra: "1111270363sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "JORDAN DE MELLO FRANCO", ra: "1114030028sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "GABRYELLY OLIVEIRA FERREIRA", ra: "1104015432sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "JONNATHAN DE SOUZA OLIVEIRA", ra: "1141640077sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ELSON DE OLIVEIRA RAIMUNDO JUNIOR", ra: "1132107994sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "HEYTOR AUGUSTO CHAGAS DOS SANTOS", ra: "1122268762sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "KEROLIN GONCALVES ANDRADE SENA", ra: "114160355xsp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "LETICIA RENATA DE SOUZA", ra: "1142533888sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "GEOVANNA GABRIELA PIERRE SILVA", ra: "1122198954sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "RAFAEL LIRA DE ARRUDA ALVES", ra: "1147811593sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "GABRIELLY GUEDES MARCOLINO", ra: "0001122267903sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "GUILHERME AMORIM BARROS", ra: "0001132054448sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "JOAO PEDRO CARVALHO SILVA", ra: "0001145263653sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "GIOVANNA AZEVEDO DE TORO MATTOS", ra: "0001129991568sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "GUILHERME ALMEIDA SANTOS MARTINS", ra: "0001132040504sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "GUSTAVO HENRIQUE DOS SANTOS RODRIGUES", ra: "000114168200xsp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "GABRIELLA RIBEIRO DA SILVA", ra: "0001137836763sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "EVELLIN DO NASCIMENTO BORROMEU", ra: "0001122262188sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "JOANA DARK DA SILVA FERREIRA", ra: "0001122300888sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "EDUARDA STHEFANY MARQUES DA SILVA", ra: "0001147385609sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MARIA EDUARDA FERREIRA TORRES", ra: "0001202270888sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "JOHN GRIGORIO SILVA", ra: "0001165262484sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "MARIA LUISA ALVES DOS REIS", ra: "1166773176sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "THALIA VICTORIA OLIVEIRA CARDOSO", ra: "1214834334sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "LEONARDO SILVEIRA DOS SANTOS", ra: "1158852319sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "DENYEL LUKAS RODRIGUES MAIA", ra: "1150679529sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "LAIS VITORIA DA SILVA SANTANA", ra: "1165274887sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "LAURA FERREIRA SATURNINO", ra: "1158850396sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "HENRIQUE NASCIMENTO DOS SANTOS", ra: "1158809669sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "JENIFFER YASMIN SANTOS DE SOUZA", ra: "0001139771036sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "ISABELLA GUEDES PORTA", ra: "000113484539xsp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "ISABELLY VICTORIA MARTINS DA CONCEICAO", ra: "0001206267768sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "EVELYN BATISTA DOS SANTOS NEVES DE LIMA", ra: "0001148976875sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "GABRIEL AMORIM DE OLIVEIRA", ra: "0001150709911sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "EMERSSON JOSE RAFAEL LEON PENA", ra: "0001234037488sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "JUAN DE SIQUEIRA SANTOS", ra: "0001201301403sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "GABRIEL DA SILVA OLIVEIRA", ra: "0001141574330sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "HENRIQUE DA COSTA SILVA", ra: "0001155664565sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "GABRIELLY BORGES DE SOUZA", ra: "0001132098294sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "GABRIELLY MAXIMO SIMOES", ra: "0001132225802sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "GABRIEL DE SOUZA SOARES", ra: "000114151266xsp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ENZO PIETRO CORDEIRO DOS ANJOS", ra: "0001142208126sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "EDUARDA CRISTINA SALES TOLENTINO", ra: "0001132230998sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "ISAIAS RAFAEL FLORIANO DE OLIVEIRA", ra: "0001132044820sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "FRANCIELEM SAMY DE FRANCA GOMES", ra: "0001150837822sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "FERNANDA MARQUES TEIXEIRA", ra: "1141627802sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "JULIA APARECIDA TEODORO CHAGAS", ra: "1122244800sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "GEOVANA LIMA ARRABAL", ra: "1148154164sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "JULIA APARECIDA TEODORO CHAGAS", ra: "1122244800sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "IAGO LUIZ PEREIRA FERNANDES", ra: "1120187035sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ISAAC PRADO DE SOUSA", ra: "1111282420sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "LORENA ARAUJO BAPTISTA", ra: "1141609836sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "LIVIA OLIVEIRA RODRIGUES", ra: "1132165568sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "GUILHERME DANIEL VELOSO DOS SANTOS", ra: "1132176281sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "RAYANNE FERREIRA ABREU", ra: "1132121474sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "GUILHERME ALVES MANOEL", ra: "0001111260746sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "GUSTAVO CUENCAS CARVALHO BATISTA", ra: "0001120530829sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "JOAO VITOR DA SILVA MACHADO", ra: "0001122279528sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "GRASIELA LIMA RODRIGUES", ra: "0001141559171sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "GUILHERME CAUA DOS SANTOS CARNEIRO", ra: "0001122298092sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "HIGOR FURTADO DA ROCHA", ra: "0001101287834sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "GEOVANNA EDUARDA GONCALVES DE SOUZA", ra: "0001122134605sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "GABRIEL MOREIRA SILVA SANTOS", ra: "0001146954876sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "JOAO PEDRO MARIN OLIVEIRA", ra: "0001122237431sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "ENZO GABRIEL SOUZA LOPES", ra: "000115878997xsp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MARIA EDUARDA RIBEIRO DE OLIVEIRA ROCHA", ra: "0001214908135sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "KAMILY GABRIELLY SOARES XAVIER", ra: "0001163578009sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "MELISSA DA SILVA PRIETO", ra: "1214907829sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "PIETRO LUCAS DA SILVA", ra: "115889367xsp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "LORENA DUARTE MARTINS", ra: "1249424550sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ELLIAS SANTOS DE OLIVEIRA", ra: "1207042511sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "MICAEL PINHAL FERRAZ (MICAELA PINHAL FERRAZ)", ra: "1141671116sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "LETICIA ALMEIDA DE SALES", ra: "1158852502sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "HENRY BOMBARDINI DOS SANTOS", ra: "1150679128sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "JULIA CRISTINA ALCANTARA PAULINO", ra: "0001158829887sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "ISABELLY SOUSA DE LAIA", ra: "0001150733202sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "JOAO VITOR SANTOS COSTA", ra: "0001165389186sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "GEOVANNA BELLA ELIAS DO NASCIMENTO", ra: "0001150725060sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "GIOVANA BEATRIZ SORIA GUERREIRO", ra: "0001138842825sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "EMMILY RIHANNA CONDORI LLANOS", ra: "000114162056xsp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "KATHLEEN NAYARA DA SILVA SANTOS", ra: "0001142542464sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "GUILHERME ARAUJO DE MENESES", ra: "0001138392893sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "HENRIQUE ZIDANE CAVALCANTE SANTOS", ra: "0001150799894sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "GUILHERME SANTOS RUIZ", ra: "0001141621277sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "GIOVANNA MARQUES JUSTICA", ra: "0001132157687sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "GABRIEL MOREIRA RODRIGUES", ra: "0001101287809sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "FELIPE DOS SANTOS MARQUES", ra: "000113209978xsp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "EDUARDO ANDRADE DA SILVA", ra: "0001132091779sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "JHONATHAN VARANDA SGUACABIA", ra: "0001122141257sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "GABRIEL BARBOSA FELIX DA SILVA", ra: "0001117955692sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "GABRIEL DA SILVA PIRES", ra: "113209818xsp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "KAUA RIBEIRO PAIXAO", ra: "1151456044sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "GIOVANNA BARBOSA DREHER", ra: "1141467203sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "KAUA HENRIQUE EVENCIO DOS SANTOS", ra: "1214871859sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ISAQUE DE JESUS SANTOS", ra: "1141567362sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ISABELLA BRITO SILVA", ra: "1141673629sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "LUCAS SOUZA CAVASINI", ra: "1163011538sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "LUANA PEREIRA SANTOS", ra: "1141495041sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "GUSTAVO RODRIGUES DE SOUZA", ra: "1132106084sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "RODRIGO BRITO CARPINTEIRO", ra: "1122198930sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "GUILHERME GONCALVES DE ARAUJO", ra: "0001147565387sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "GUSTAVO DOS SANTOS VIEIRA", ra: "0001122080815sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "JOSE HENRIQUE GOMES FERREIRA", ra: "000109408041xsp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "GRAZIELLY CARDOZO INHESTA", ra: "0001122089351sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "HENRIQUE OLIVEIRA SANTOS", ra: "0001132145673sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "ISABELE GONCALVES DOS REIS", ra: "0001101285989sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "GUSTAVO OLIVEIRA FELIX", ra: "0001136083522sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "GABRIELLY ESPINDOLA DA SILVA", ra: "0001132923414sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "JULIA VICENTE DUARTE", ra: "000114160811xsp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "ESTER VITORIA FELIX DA CRUZ", ra: "0001158791963sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MARIA LUIZA ALVES DA SILVA", ra: "0001239240843sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "KAROLINA APARECIDA DE LIRA", ra: "0001230136010sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "MIGUEL SATURNINO LIBERATO DA SILVA", ra: "115887862xsp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "PIETRO SOUZA SANTOS", ra: "1165198307sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "LORRAYNE VICTORIA RODRIGUES DA SILVA", ra: "1165315373sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ELOISA NASCIMENTO BORROMEU", ra: "1165028220sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "MIGUEL RINALDI DE SOUZA", ra: "1150679396sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "MARIA VITORIA LINO DA SILVA", ra: "1165170425sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "JUAN DIEGO MAMANI CAMPOS", ra: "1150679281sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "KAUANE PEREIRA DA SILVA", ra: "0001150722691sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "IZAURA GIOVANNA SOARES RODRIGUES", ra: "0001158823253sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "KARINE PINHEIRO ABREU", ra: "0001141694906sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "HELOISA SANTOS DE MACENA", ra: "0001141502392sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "IAGO CANDIDO FILHO", ra: "0001141637674sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ERICH RAMOS ARAUJO", ra: "0001168131583sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "KAUAN RAMIREZ DA SILVA FRANCO", ra: "0001150803332sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "GUILHERME RAFAEL SANTOS MARTINS", ra: "0001132127634sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "JUAN CARLOS SANTA ROSA DE OLIVEIRA", ra: "0001252261603sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "HELOISA PARANHOS ALBUQUERQUE", ra: "0001150805766sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "GISLAINY DE SOUZA DA CONCEICAO", ra: "0001118201255sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "GIOVANA DE MAIA FERRAZ", ra: "0001264252675sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "GABRIEL SERRANO ALVES BONFIM", ra: "000113214260xsp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "ELOISA DOS REIS RODRIGUES", ra: "0001141550362sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "JOAO PEDRO ANDRADE DOS SANTOS", ra: "0001113815644sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "GUILHERME LESTE MARTINS", ra: "0001150814469sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "GABRYELLY OLIVEIRA FERREIRA", ra: "1104015432sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "KAUA HENRIQUE EVENCIO DOS SANTOS", ra: "1214871859sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "ISABELA DA SILVA COSTA", ra: "1132093168sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "KAUA RIBEIRO PAIXAO", ra: "1151456044sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "JENIFER XAVIER DE OLIVEIRA", ra: "1141690998sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ISABELLY VITORIA DE PAULA TAVARES", ra: "1122138817sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "NICOLAS GUELFF LOPES DA SILVA", ra: "1141826586sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "LUIS FILIPI SILVA DE MELO", ra: "1111325790sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "ISAAC LEMOS SANTOS", ra: "1141548744sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "THIAGO MARQUES CARUSO", ra: "1132155915sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "GUILHERME MIRANDA SANTOS", ra: "0001132090131sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "GUSTAVO SILVA DOS SANTOS", ra: "0001117515370sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "JULIO CESAR DA SILVA PINTO", ra: "0001132233446sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "GUSTAVO COELHO FREITAS", ra: "0001122173623sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "KAMILLY VITORIA DOS SANTOS", ra: "0001132990749sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "JULIA OLIVEIRA RODRIGUES", ra: "0001120187679sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "IZABEL CHRISTINY DA SILVA FERREIRA", ra: "0001122122688sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "GUSTAVO CARVALHO POLINARIO", ra: "0001122152838sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "KAUA SANTOS OLIVEIRA", ra: "0001130455452sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "GUILHERME HENRIQUE ALMEIDA DO NASCIMENTO", ra: "0001223584641sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MATHEUS MEDEIROS DE FARIA MONZEN", ra: "0001207770796sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "LAVINIA LIUS DE ALMEIDA MORAES", ra: "0001164936062sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "RUAN GUSTAVO JESUS SILVA", ra: "1165206663sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "DAVID DA SILVA RODRIGUES NEVES", ra: "1158781362sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "MARCOS ENEDINO BRAGA", ra: "1165295416sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "ESTHER KAROLINE BRITO DA SILVA", ra: "1165034712sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "MIGUEL SILVA CAMPOS", ra: "1150742045sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "MATEUS RICARDO ARAUJO CUSTODIO", ra: "1165173347sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "KAUAN RYQUELME PEREIRA LISBOA", ra: "1150679219sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "KELVIN DE OLIVEIRA FERREIRA", ra: "0001150725035sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "JAMYLLE HERNANDES BARBOZA", ra: "0001158823757sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "KAUAN JHOE CASSEANO DOS SANTOS", ra: "0001158834561sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "ISABELLA LEMOS DE OLIVEIRA", ra: "0001150724948sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "ISABELLA FONTES DE JESUS GIACOMINI", ra: "0001150725114sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "GRAZIELLE SILVA COSTA", ra: "0001125679116sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "KAUE GONCALVES DE LIMA", ra: "0001132102364sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "GUILHERME YAN VILELA AGUIAR", ra: "0001158804313sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "JULIA DANTAS PEREIRA", ra: "000115882998xsp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "HENRY SULIVAN MENEZES BARBOSA", ra: "0001141560562sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "GUILHERME PAZ VITORIANO", ra: "0001132137500sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "GIULIA SOUZA MARTINS", ra: "0001163677565sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "GABRIEL SILVA THOMAZIN", ra: "0001132198112sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "GABRIEL SANTOS RUIZ", ra: "0001141605958sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "JOAO VICTOR APARECIDO MATIAS", ra: "000113208491xsp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "HENRI BORGES ALENCAR", ra: "0001127813109sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "GEOVANA LIMA ARRABAL", ra: "1148154164sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "LAURA BEATRIZ AZEVEDO LIMA DOS SANTOS", ra: "1141671785sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "ISABELLA FERREIRA BRAGA", ra: "1121655051sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "LARYSSA BRUM ASSUMPCAO DOS SANTOS", ra: "112224888xsp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "KAIC YSAQUE OLIVEIRA FERRARI", ra: "112211428xsp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "LUANA CORREIA DOS SANTOS", ra: "1156159210sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "NYCOLAS BRITO DA SILVA", ra: "1122297701sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "LUIZ HENRIQUE JESUS DOS SANTOS FABRICIO", ra: "1101285746sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "ISAAK ALVAREZ MARQUEZ CAETANO", ra: "1141664471sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "YASMIM RIBEIRO SILVA", ra: "1142216536sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "ISABELLY CRISTINA MATHEUS DOS SANTOS", ra: "0001105028811sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "ISABELA FALLICO AUGUSTO CHINARELLI", ra: "0001132080320sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "KAIQUE JOSE PEREIRA GARCIA", ra: "0001120079743sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "HELENA SOUZA LIMA", ra: "0001132141448sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "KAUANY SILVA LOPES DESTRO", ra: "0001141755130sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "JULIO CESAR DA SILVA SANTOS", ra: "0001105005124sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "JOAO PEDRO GONCALVES BARRETO", ra: "0001135551972sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "JEAN LUCCA ALVES DOS SANTOS", ra: "0001142652063sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "KETHLYN CRISTINA EUGENIO BRAGA", ra: "0001114026943sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "HIAGO ALEXANDRE BARBOSA DE PAULA", ra: "0001166711833sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MIGUEL CERCUNDO TEODORO", ra: "0001214886838sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "LEANDRO OLIVEIRA LINO", ra: "0001158851996sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "SAMUEL DOS SANTOS", ra: "1165208623sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "EMILLY VYTORIA CARVALHO TENORIO", ra: "1230081793sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "MARIANY CRUZ CABRAL", ra: "1165172197sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "GABRIEL HENRIQUE MACHADO DE OLIVEIRA", ra: "1216168246sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "NATHALIA BRITO CAMARGO", ra: "1150701584sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "MURILO GONCALVES GAZZE", ra: "1164432321sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "KELVIN LUCAS DA SILVA NOGUEIRA", ra: "1159962649sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "KEMELLY ALMEIDA FRANCA", ra: "0001165273780sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "JULIA DOS SANTOS OLIVEIRA", ra: "0001158830798sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "LORENA VALENTINA BATISTA LUCAS", ra: "0001150724973sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "JOAO PEDRO SOUZA DE LIMA", ra: "0001158826473sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "JOAO RICARDO CRUZ RODRIGUES", ra: "0001150712144sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "HENRYQUE OLIVEIRA DE SOUZA", ra: "0001158809670sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "LAURA SANTOS SANTANA", ra: "000121493397xsp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "HEITOR FERREIRA SANTOS", ra: "0001137187670sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "JULIA OLIVEIRA SANTOS", ra: "0001150796662sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "JOAO VICTOR SODRE LOPES", ra: "0001132095542sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "HUGO MANUEL SILVA LIMA", ra: "0001141547545sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "HENRIQUE BORGES SOUZA", ra: "0001141567532sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "GIOVANNA VITORIA MACHADO DE OLIVEIRA", ra: "0001141665876sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "GABRIELLI ARUEIRA FELIX", ra: "0001150824645sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "JOAO VICTOR SANTOS BEZERRA", ra: "0001132181124sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "ISAQUE GUISELINI DE JESUS SILVA", ra: "0001132243130sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "GIOVANNA BARBOSA DREHER", ra: "1141467203sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "LEILA CRISTINA MENDES SANTANA", ra: "112223871xsp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "ISABELLY LORRAINE DA SILVA SANTOS", ra: "1114025690sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "LAURA BEATRIZ AZEVEDO LIMA DOS SANTOS", ra: "1141671785sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "KAUA DE OLIVEIRA MARIANO", ra: "1122238058sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "LUIS EDUARDO SANTOS MOURA", ra: "1141628776sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "PEDRO HENRIQUE DA SILVA MELGAS", ra: "1125099690sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "MARIA KLARA CONCEICAO SILVA DE JESUS", ra: "1132106813sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "JOAO GABRIEL AMORIM TOBIAS", ra: "1141428611sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "LUIZ GUILHERME DA SILVA OLIVARES", ra: "1132151260sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "JASIELE SANTOS ASSIS", ra: "0001132163808sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "JOAO VITOR FERREIRA DOS SANTOS LOPES", ra: "0001122180007sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "KAUA FAUSTINO DA SILVA", ra: "0001137852252sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "JOAO MIGUEL FERREIRA GUIMARAES DOS SANTOS", ra: "000112211946xsp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "KEMILLY VITORIA OLANDA DA SILVA", ra: "0001132080368sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "JULYA BEATRIZ BARBOSA ALVES", ra: "0001101285734sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "JOAO VICTOR AGUIAR CRUZ", ra: "0001141624187sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "JENNIFER RODRIGUES ALVES", ra: "0001122099411sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "LARA BEATRIZ DOS SANTOS SILVA", ra: "0001122165055sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "JORGE GABRIEL SANTOS ASSIS", ra: "0001214875464sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MIGUEL GOUVEA CARDOSO", ra: "0001214935035sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "LUAN HENRIQUE BERNEGOSSO DA CRUZ", ra: "0001214850996sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "VICTOR HUGO SILVA SANTOS", ra: "1214794099sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "FHRANKLYN ALVES ANDRADE", ra: "116503783xsp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "MATHEUS TATEISHI SOUZA", ra: "120400562xsp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "GABRIEL MATHEUS CORDEIRO ANJOS", ra: "1216167023sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "NATHALIA CRISTINI VIANA COUTO", ra: "1149640674sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "NICOLAS MOURA DO NASCIMENTO", ra: "1138674114sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "LARYSSA ROSANA CURSI MOREIRA", ra: "1165276835sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "KETHELLYN DA SILVA BORGES", ra: "0001141434507sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "JULIA EDUARDA DE SOUZA SANTOS", ra: "0001141686806sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "LUIZ HENRIQUE DA SILVA LOPES", ra: "0001158860420sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "JULIA GOMES DA SILVA", ra: "0001150733287sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "JULIA MARIA LIMA GOMES DA COSTA", ra: "0001158831353sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "ISAAC SILVA DIAS", ra: "0001158811780sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "LAURA VITORIA GAMA DE ABREU", ra: "0001156142477sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "INGRID SILVA SANTOS", ra: "0001150777667sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "JULYA KARLA CONCEICAO SILVA DE JESUS", ra: "0001214861982sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "JOSE JEFERSON DO NASCIMENTO SANTOS", ra: "0001217446977sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "GABRIEL GASPAR DE JESUS (ICARO GABRIEL GASPAR DE JESUS)", ra: "0001147374569sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "ISABELLY SANTOS MAIA", ra: "0001141454956sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "GIULIA OLIVEIRA DE SOUZA", ra: "0001132160327sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "GIOVANA FIGUEIRA PAZA", ra: "0001147695994sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "JULIA VITORIA JESUS SOUZA", ra: "0001150824487sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "JOAO PEDRO GOMES ROSADO", ra: "0001125962343sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "GUSTAVO VINICIUS NUNES DE FRAGAS", ra: "1132066591sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "LEVI HENRI SOUZA DE OLIVEIRA", ra: "1122277830sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "JULIA RODRIGUES DO NASCIMENTO", ra: "112211266xsp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "LEVI HENRI SOUZA DE OLIVEIRA", ra: "1122277830sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "KIMBERLY FREIRE DE LIMA", ra: "1149083323sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "LUIZ FERNANDO LIMA DA SILVA", ra: "1141411453sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "VICTOR FERREIRA ESCARDINE", ra: "115083772xsp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "NICCOLY MARTINS VIEIRA DE SA", ra: "1114370927sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "LARISSA DE LOURDES DOS SANTOS", ra: "1122136869sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "RIAN LIMEIRA RAMOS DA SILVA", ra: "1141518016sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "JULLIA BARBOSA MATOS", ra: "0001132068083sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "JOSE GUILHERME SOUZA DE MOURA", ra: "0001211206841sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "KAUA VINICIUS MARTINS DOS SANTOS", ra: "0001122293689sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "JULIA BEATRIZ DE MELO TEIXEIRA", ra: "0001132179579sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "LARISSA BEATRIZ DA SILVA", ra: "0001122253746sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "KEROLYN MARIA APARECIDA BEZERRA", ra: "0001141475042sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "JULIA RODRIGUES DA SILVA", ra: "0001122081443sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "JOAO MARCOS SOARES DE SANTANA", ra: "0001122121088sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "LAYLA FADI MAHMOUD AYESH", ra: "0001158851558sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "MARIA CLARA MOURA ROMUALDO", ra: "0001259075849sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MIGUEL OLIVEIRA ALVES", ra: "0001158877237sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "MANUELLA DE MORAES SILVA", ra: "0001165293705sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "YURI FERNANDES DA SILVA", ra: "1148049150sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "JOYCE BEATRIZ MARTINS DOS SANTOS", ra: "1150725254sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "MOHAMMAD FADI MAHMOUD AYESH", ra: "121634131xsp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "HELOYSA RAMOS DA SILVA", ra: "1150679104sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "OTAVIO LIMA SANTOS", ra: "1214846403sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "NICOLLAS PAZIKAS JANUARIO", ra: "1164949780sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "LORANNA OMENA DRAGO", ra: "1158854250sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "LARISSA OLIVEIRA SILVA", ra: "000113217532xsp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "KEVIN RICHARD SILVA BUJALDON", ra: "0001161831484sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "LUIZ MIGUEL DIAS DE OLIVEIRA SILVA", ra: "0001165291071sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "LOHANY SOARES BERTO", ra: "0001158854225sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "KAIO HENRIQUE OLIVEIRA DA SILVA", ra: "0001150732933sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "KAIO GUILHERME DA CONCEICAO NASCIMENTO", ra: "0001141534071sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "LORRANY ESTEPHANE DA SILVA MELO", ra: "0001148842342sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ISABELLY LOPES CODINA", ra: "0001150784337sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "KAIQUE INACIO DE LIMA", ra: "0001158832527sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "JULLIA REBECA ARAUJO DE OLIVEIRA", ra: "0001126266097sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ISABELLA CRISTINA PEREIRA ARAUJO", ra: "0001132187382sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "ISABELLY SOUZA DE OLIVEIRA", ra: "0001122270689sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "GUILHERME JESUS DE SOUZA", ra: "0001132226934sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "GIOVANNA SOPHIA LOURENCO DA SILVA", ra: "0001141492039sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "KETELLY ROCHA DOS SANTOS", ra: "0001132168119sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "JOAO VICTOR FERNANDES DE PAULA", ra: "0001156119650sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ISABELA DA SILVA COSTA", ra: "1132093168sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "LIDIA GONZAGA DA SILVA", ra: "1141444562sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "KELVIN ADRIANO DA SILVA MEDEIROS", ra: "1122296940sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "LIDIA GONZAGA DA SILVA", ra: "1141444562sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "LARISSA CRUZ DOS SANTOS", ra: "1214823518sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "MARCOS VINICIUS CAMPOS CONCEICAO", ra: "1122100486sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "YASMIN HALANA SANTOS DE MENEZES", ra: "1239477776sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "PEDRO ALVES VENANCIO", ra: "1138772975sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "LAURA LUIZA DOS SANTOS ALMEIDA", ra: "1141686442sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "VIDSON RYAN ALVES OLIVEIRA", ra: "1122269729sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "JULYA OLIVEIRA DA SILVA", ra: "000112213065xsp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "KAIRAN CRISTIAN SILVA ESTEVAM", ra: "000110498670xsp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "KELVYN LORRAN SALES DO NASCIMENTO", ra: "0001122125732sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "LAURA ALMEIDA DE SALES", ra: "0001132081105sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "LARYSSA NIRY FERREIRA DE OLIVEIRA", ra: "0001122235859sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LARA FELIX BRITO DOS SANTOS", ra: "000110494442xsp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "LEONARDO OLIVEIRA GODINHO", ra: "0001103348504sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "KAUA GALDINO OLIVEIRA", ra: "0001093654685sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "LETICIA GOMES DA SILVA NEVES", ra: "0001114035099sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "MATHEUS CARVALHO ROSA", ra: "0001214884295sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MIGUEL SILVA SOUZA", ra: "0001165180492sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "MARIA CLARA DE SOUZA LOPES", ra: "0001230011717sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "ALYCE ISABELLY MARTINS SENA", ra: "1164987823sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "KENNEDY BOMBARDINI DE OLIVEIRA", ra: "1165274231sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "MURILO CASERI CARVALHO", ra: "1158881381sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "JOAO PEDRO RODRIGUES DA SILVA ALVES", ra: "1150670149sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "PAULO THYAGO BRITO OLIVEIRA", ra: "1206921547sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "NICOLLY DE OLIVEIRA BITENCOURT", ra: "1203675379sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "MAIKON EMANUEL CAMPOS MACHADO", ra: "1146354964sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "LORENA MACEDO BARBOSA", ra: "0001134783723sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "LUCAS DE OLIVEIRA CASSIMIRO", ra: "000116528683xsp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "MARCELE THIELLY LOPES SAMPAIO", ra: "000125524902xsp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "LORRAYNE HELOISA DE SOUZA MARQUES", ra: "0001141690408sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "LARISSA DE SOUZA CAVALCANTE", ra: "0001150724997sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "LUCIANO GOMES FERREIRA", ra: "0001141666649sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "LUCAS MATOS DE ARAUJO", ra: "0001132173139sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "ISABELLY VIANA DOS SANTOS", ra: "0001150768861sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "KATHELLYN KAUANNE DE SOUSA MORETAO", ra: "0001141685371sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "LAIZA ELIAS DOS SANTOS", ra: "000114253926xsp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ISABELLA SOUZA DE OLIVEIRA", ra: "0001141432262sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "IZADORA NUNES DA SILVA", ra: "0001132211736sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "HARLLEY CERQUEIRA SANTOS", ra: "0001132229406sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "ITALO KAUE SANTOS SILVA", ra: "0001260586224sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "KEVYN LUCAS MARIANO NEVES", ra: "0001122209940sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "JULIA MENESES DA SILVA", ra: "0001150806771sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ISABELLA FERREIRA BRAGA", ra: "1121655051sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "LUANA CORREIA DOS SANTOS", ra: "1156159210sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "KEMELLY RAYANE RODRIGUES", ra: "1127046263sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "LUCAS FERNANDES MAGALHAES", ra: "1132145284sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "MARIA EDUARDA OLIVEIRA DUARTE", ra: "1132069658sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "MARIA EDUARDA DE OLIVEIRA PEDRO", ra: "1111838355sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "ENZO MARQUES GAIO DA SILVA SOUZA", ra: "1120051186sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "PIETRO MESSIAS DE ALMEIDA FRANCA", ra: "1141554999sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "LEONARDO ABADE DA SILVA DANTAS", ra: "114154104xsp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "RYAN CARLOS SOUZA DAVI", ra: "1119956274sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "KLEBER ALEJANDRO PESSOA DE OLIVEIRA", ra: "0001101391078sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "KAUA LUIS CARVALHO DE SOUZA", ra: "0001114026050sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "LAURA PEREIRA NASCIMENTO", ra: "0001104042988sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "LEONARDO OLIVEIRA ANDRADE", ra: "0001122248726sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "LEANDRO MARQUES MARTINS DOS SANTOS", ra: "0001111271318sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LARISSA MAGALHAES TEIXEIRA", ra: "0001141691838sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "MAIRA ABREU DE PAULA IERICH", ra: "0001122238927sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "KAUAN WILLIAN SILVA", ra: "0001132080824sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "MARIA CLARA DE ANDRADE SAMPAIO", ra: "0001132071938sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "MAYSA DOS SANTOS VIEIRA", ra: "0001214926794sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MILLENA ALEJANDRA CARDOSO BUSTILLOS", ra: "0001165182750sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "MATEUS HENRIQUE SOUSA SANTOS", ra: "0001158872987sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "BIANCA ALVARENGA", ra: "1158662774sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "LAYSLA LOHANNY CRISTINA LIMA BASTOS", ra: "1214879214sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "NATAN SEM ARUEIRA FELIX", ra: "1216167163sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "JULIA PEREIRA DA SILVA APOLINARIO", ra: "1214841703sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "PEDRO VINICIUS RODRIGUES BARBOSA", ra: "1150679505sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "RAFAEL ALVES DE FREITAS", ra: "1165198198sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "MARIA EDUARDA SOARES DE LIMA", ra: "1141599028sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "LUANA CAROLINE CHAMBI MAMANI", ra: "0001141437405sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "LUISA FERNANDA CONCEICAO BEZERRA", ra: "0001239240077sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "MIGUEL JOSE SILVEIRA", ra: "0001141456023sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "MANUELLA SENNA DIAS", ra: "0001150733111sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "LORENZO RIBEIRO CAPOLUPO SAMPAIO", ra: "0001150752312sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "MARCO AURELIO DE ALMEIDA SILVA", ra: "0001132125935sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "LUIZ FELIPE LIMA DA SILVA", ra: "000114151638xsp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "KAINE LUARA SANTOS FERNANDES", ra: "0001150775725sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "KATHERINY HILLARY RODRIGUES AUGUSTO", ra: "0001132135722sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "LAURA ANDRADE DA SILVA", ra: "0001137151675sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ISABELLY CORDEIRO ANJOS", ra: "0001158820343sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "JHASMANNY DYLAN CONDORI LLANOS", ra: "0001132162208sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "HENRY JUNDI SUMIDA", ra: "0001141876723sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "JOAO PEDRO DO NASCIMENTO COSTA", ra: "0001141687665sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "LEONARDO DOS SANTOS SOARES", ra: "0001141453642sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "KAMILA NEVES BRITO", ra: "0001122109829sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ISABELLY LORRAINE DA SILVA SANTOS", ra: "1114025690sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "LUCAS FERNANDES MAGALHAES", ra: "1132145284sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "LAYS NOGARA MOREIRA", ra: "1132093211sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "LUCAS PEREIRA DOS SANTOS", ra: "1114028228sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "MARIA EDUARDA RIBEIRO LIMA", ra: "1142432786sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "MATEUS PEREIRA RAFAEL", ra: "1141572503sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "THAYLA ESTEVAO DE SOUZA", ra: "1132064818sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "RAFAEL GIOVANI LUIZ BRAGA BARBOSA", ra: "1158895331sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "MARIA EDUARDA VENCESLAU DE SOUZA", ra: "1123918867sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "MARIA EDUARDA BORGES BARBOSA", ra: "1122264446sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "LYVIA DA SILVA XAVIER", ra: "0001108374104sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "KAUAN HENRIQUE DE SOUZA ARIELO", ra: "0001122242943sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "LAVYNIA TOLEDO MACHADO", ra: "0001132186110sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "LIVIA FRANCA DE FREITAS", ra: "0001102401535sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "MATHEUS SERRA DOS SANTOS", ra: "0001129060354sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LARISSA VICTORIA RODRIGUES MORAIS", ra: "0001130239901sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "MATHEUS ALMEIDA DESTRO", ra: "0001132426790sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "KAUANNY VITORIA SOUSA RODRIGUES", ra: "0001105027193sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "MARIANA SILVA DE MORAES", ra: "0001132048394sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "MELISSA MIRELLY OLIVEIRA DOS REIS", ra: "0001165175952sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "MILLENA OLIVEIRA DOS SANTOS", ra: "0001150701365sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "MIQUEIAS DEL VALLE ISAIAS MAGALHAES", ra: "0001165182944sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "GUILHERME OLIVEIRA DE SOUZA", ra: "1165048772sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "MATEUS RODRIGUES LINS DA SILVA", ra: "1214756153sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "NEYDI NICOL LOPEZ NINA", ra: "1144306772sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "KAUANNY LOPES SANTOS", ra: "1150679475sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "RAFAEL CIRINO DE SOUZA MORAES", ra: "1158894594sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "RAFAEL JUAN LIMA BASTOS", ra: "1150683673sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "MARIA ISABELLA CORREA DE OLIVEIRA", ra: "1158869290sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "MAIKY IURY SAID SOUSA", ra: "0001208270795sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "LUIZ HENRIQUE SILVA DE MELO", ra: "0001150716472sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "MIRELLY ARTHEMIS DA SILVA NASCIMENTO", ra: "0001150751447sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "MARIA EDUARDA DE SIQUEIRA FLORENTINO", ra: "0001158865715sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "LUIZ FERNANDO RAMOS", ra: "0001141635872sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "MARIA CECILIA DE PAULA PONTANI", ra: "0001141609277sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "MANUELLA ASSIS DOS SANTOS", ra: "0001158862295sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "KAUANY VITORYA DE SOUZA ARAUJO", ra: "0001132179440sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "KAYLLA VICTORIA DA SILVA GARCIA", ra: "0001150838541sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "LICIA VITORIA PINHAL PEREIRA", ra: "0001132130293sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "ISAQUE VIEIRA DE ANDRADE", ra: "0001142609066sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "JHONATHAN GABRIEL NASCIMENTO SANTOS", ra: "0001141561773sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ISAQUE FERREIRA DA SILVA", ra: "0001132231498sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "JOAO PEDRO SILVA ROCHA", ra: "0001132083291sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "LIVIA MARIA BARBOSA", ra: "0001150823446sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "KAYCK AUGUSTO PIENEGONDA PEREIRA DO NASCIMENTO", ra: "0001141694736sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "JULIA RODRIGUES DO NASCIMENTO", ra: "112211266xsp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "MARIA EDUARDA ROSA NOGUEIRA", ra: "1141702575sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "LEILA CRISTINA MENDES SANTANA", ra: "112223871xsp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "MARCOS GESUALDO FERREIRA", ra: "1122133066sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "MARIA EDUARDA ROSA NOGUEIRA", ra: "1141702575sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "MAXMILLIAN HIROSHI DOS SANTOS SATO", ra: "1101287482sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "VINICIUS DE ARAUJO PEREIRA", ra: "1122319010sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "RYAN LUCAS LOPES DA SILVA", ra: "1141510352sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "MATHEUS CAVALCANTE LISBOA", ra: "1122175759sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "JHONATA ROCHA DA SILVA", ra: "1129617221sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "MATHEUS ALVES MENDES", ra: "0001132174855sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "KAUE HENRIQUE SORIA GUERREIRO", ra: "0001093061108sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "LUIZ GUSTAVO MATHEUS PINTO ORZI", ra: "000113220706xsp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "LIVIA MATIAS BELAI", ra: "0001101409228sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "MONIQUE PEREIRA ROUGER", ra: "0001122131471sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LEONARDO MOURA DE SOUZA LIMA", ra: "0001141002206sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "PEDRO FERREIRA MARQUES", ra: "000110166406xsp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "KEVELLY VITORIA DA SILVA", ra: "0001103943091sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "MURILLO GABRIEL MENDES DE OLIVEIRA", ra: "0001105002160sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "MURILO SARAIVA TRINDADE", ra: "0001214791049sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "NICOLE FERREIRA SANTOS", ra: "0001158884047sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "MIQUEIAS PAULINO SILVA", ra: "0001150683387sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "GUSTAVO AUGUSTO BRAGA", ra: "1150679402sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "RAUL GUILHERME REIS GOES", ra: "1154767565sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "PABLO LUIZ NOGUEIRA RIBEIRO", ra: "1239199867sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "KENDRICK RODRIGUES AUGUSTO", ra: "1150679037sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "RIKELMY JOAO TAVARES ALVES", ra: "1214867704sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "SARA SOPHYA PEREIRA DA SILVA", ra: "1165210587sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "MATHEUS MATOS ARAUJO", ra: "114161604xsp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "MARIA EDUARDA OLIVEIRA FERREIRA", ra: "0001139997014sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "LUIZA RIBEIRO SOUZA", ra: "000114147847xsp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "MURILO FERRAZ DA SILVA", ra: "0001158881472sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "MARIA EDUARDA OLIVEIRA SILVESTRE SANTOS", ra: "0001148109213sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "MARIA EDUARDA APARECIDA GUILHERMINO DE SOUZA", ra: "0001141667769sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "MARIA EDUARDA DA SILVA MELO", ra: "0001158865387sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "MICKAELY LETICIA CAMPOS MACHADO", ra: "0001125381942sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "KETHELY SILVA SANTOS", ra: "0001150784349sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "KEMILLEN FERREIRA LIOTERIO", ra: "0001132097538sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "LUAN LIMA EVANGELISTA", ra: "0001125144828sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "JOAO CARLOS SANTOS DE SANTANA", ra: "0001215822066sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "JULIA DIAS MELO", ra: "0001132105353sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ISMAEL FERREIRA DA SILVA", ra: "0001132230925sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "JOAO VITOR SOUZA DOS SANTOS", ra: "0001132093430sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "LUCAS SANTOS MOURA", ra: "0001137830980sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "LAUANNY SABRYNNY NASCIMENTO SANTOS", ra: "0001122278706sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "LAYS NOGARA MOREIRA", ra: "1132093211sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "MATEUS PEREIRA RAFAEL", ra: "1141572503sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "MANUELA FURINI", ra: "111103090xsp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "PEDRO GUILHERME HONORIO CARDOSO", ra: "1132093958sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "MARIA ELOISE DE SOUZA MIGUEL", ra: "1122254088sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "PIETRA RIBEIRO TAVARES DE ARAUJO", ra: "1117868278sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "BRENNDA BATISTA BRITO DA SILVA", ra: "1072379089sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "SAMIRA ALVES LIMA", ra: "1132152811sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "MURILLO SOUZA RODRIGUES DOS SANTOS", ra: "1122296228sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "GUILHIA SOARES DE ALMEIDA", ra: "1114036432sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "MATHEUS PABLO SOUSA ANJOS", ra: "0001122201679sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "KEIRRISON QUISPE COCARICO", ra: "0001102147783sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "MAGNO SORRILHA SOUZA", ra: "0001120183509sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "LUARA STHEFANY ROQUE", ra: "0001104957553sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "NICOLE CRISTINA SANTOS PEREIRA", ra: "0001141689145sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LIVIA CAROLINA CORREA DO NASCIMENTO", ra: "0001109169693sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "PEDRO HENRIQUE DE SOUZA", ra: "0001122092970sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "LEONARDO CUSTODIO GOMES", ra: "0001104964429sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "NYCOLAS FERNANDES FREITAS BORGES", ra: "0001122319678sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "PABLO LUCAS DA SILVA", ra: "000115888557xsp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "NICOLLY EVARISTO DUTRA", ra: "0001223595651sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "NATAN CASTRO DE CARVALHO", ra: "0001213049404sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "ISABELLA DE SOUZA SANTOS", ra: "1254726457sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "RENATO BARBOSA SANCHES", ra: "1158899233sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "RICHARD COSMO BARBOSA", ra: "1141475789sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "LAVINIA ALVES RODRIGUES", ra: "1141630667sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "SOPHIA OLIVEIRA DOS SANTOS", ra: "1214930128sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "EFIGENIA CARMEM CERCUNDO TEODORO", ra: "1165025280sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "MIGUEL DOS SANTOS DA SILVA", ra: "1141571316sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "MARIA LUIZA DA SILVA CARDENETTI", ra: "0001160713571sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "LUZ MAILE CONDORI APAZA", ra: "0001260835133sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "NICOLAS BARROMEU GRIGORIO", ra: "0001141623262sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "MARIA EDUARDA RODRIGUES DOS SANTOS", ra: "0001150725023sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "MARIA EDUARDA CAMPOS DE SOUZA", ra: "0001141559341sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "MARIA EDUARDA SANTOS SILVA", ra: "0001132125121sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "MIGUEL ANGEL QUISPE MAMANI", ra: "0001249699228sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "KYARA VITORIA MOREIRA DOS SANTOS", ra: "0001150775865sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "MARIA EDUARDA DA SILVA OLIVEIRA", ra: "0001158865375sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "LUIGI MATIAS ROCHA", ra: "0001101412343sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "JULIA GONCALVES DA SILVA", ra: "0001132199359sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "KAUE RIBEIRO DOS SANTOS", ra: "0001150819066sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "JUSSIARA SOUZA MACEDO", ra: "0001104983552sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "JUAN MELLO PEREIRA", ra: "000113933542xsp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "MANUELLA OLIVEIRA SOUZA", ra: "000112340821xsp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "LEONARDO MATHEUS GUIMARAES DE OLIVEIRA ALVES", ra: "0001132246222sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "MANUELA FURINI", ra: "111103090xsp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "NYCOLAS BRITO DA SILVA", ra: "1122297701sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "MARIA EDUARDA ARARUNA DOS SANTOS", ra: "1114030685sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "RAIANI SANTOS SILVA", ra: "1136059489sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "MARIANA LEAL DELATORRE RESENDE", ra: "1132065781sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "RAYSSA VITORIA DE SOUZA SILVA", ra: "1141506877sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "DAVID VIEIRA DE SOUZA", ra: "1111561564sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "VITORIA LIMA MONTEIRO", ra: "1132072815sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "NAYARA BARROS DE MORAIS", ra: "1141532232sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "AMANDA REGINA RODRIGUES", ra: "112969379xsp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "PEDRO HENRIQUE DOMBSKI", ra: "0001122249676sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "LEILA VICTORIA MOREIRA DE SOUZA", ra: "0001263732963sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "MANUELLA LIMA RODRIGUES", ra: "0001099343768sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "LUCAS EDUARDO SILVA CORNELIO", ra: "0001141656231sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "PEDRO DE SALES MOTA", ra: "0001132064338sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LUCAS PEREIRA DOS SANTOS", ra: "0001114028228sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "PEDRO HENRIQUE MAURICIO DA SILVA CHAGAS", ra: "0001140937571sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "LETICIA MACEDO FERNANDES PEREIRA", ra: "0001101467976sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "PABLO VINICIUS DA SILVA CAITANO", ra: "0001141566114sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "PEDRO HENRIQUE DO NASCIMENTO SANTOS", ra: "0001158891143sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "PIETRO GABRIEL VIEIRA DA SILVA", ra: "0001153137264sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "NICOLLE MARQUES DA SILVA", ra: "0001223595390sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "LUHARA EMANUELLY SILVA FREITAS", ra: "1150724882sp", turma: "6ANO D" },
  // --- 6ANO E ---
  { nome: "SARA EMANUELLY DE JESUS CURSI", ra: "1165210940sp", turma: "6ANO E" },
  // --- 7ANO A ---
  { nome: "SOPHIA CARVALHO DE OLIVEIRA", ra: "1165212493sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "LIAN NAVAES DAMOUS RODRIGUES", ra: "1218375863sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "YURI LEONARDO MARTINS DA SILVA", ra: "1214901396sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "ENDRIYU RIAN CARDENETTI DOS SANTOS", ra: "1214946690sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "MURILLO SANTOS FERRAREZI", ra: "1220232270sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "MATHEUS TORRES DA SILVA", ra: "0001158873980sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "MARIA EDUARDA BARBOSA DE CASTRO", ra: "0001165165995sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "PEDRO ALVES DOS SANTOS PENHA", ra: "0001152564626sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "MIGUEL SERRANO ALVES BONFIM", ra: "0001141630606sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "MARIA ELANYA MENDES DA SILVA", ra: "0001212612899sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "MARIA LUISA RODRIGUES VIANI", ra: "0001141437521sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "MIKAELY RINALDI DE SOUZA", ra: "0001150783990sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "LEANDRO DA SILVA OKUBO", ra: "0001150771410sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "MATHEUS OLIVEIRA SILVA", ra: "0001141573763sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "MAHMOUD FADI MAHAMOUD AYESH", ra: "0001158769660sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "LARISSA ALVES DA SILVA", ra: "0001150819303sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "KILSEN KAROLINE BUENO GARCIA", ra: "0001129867407sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "KAIQUE ALEXANDRE DE LIMA", ra: "0001141686843sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "JULIA LEME DA SILVA", ra: "0001141663739sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "MARCOS GABRIEL SILVA ROCHA", ra: "0001132082936sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "LORENA ANDRADE DE OLIVEIRA", ra: "0001141657004sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "MARIA EDUARDA ARARUNA DOS SANTOS", ra: "1114030685sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "PEDRO GUILHERME HONORIO CARDOSO", ra: "1132093958sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "MELYSSA NUNES DE CARVALHO", ra: "1114035592sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "RHIAN FELIPE NASCIMENTO FIORENTINO", ra: "1122280488sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "REBECA SANTOS DE OLIVEIRA", ra: "1129096506sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "RIAN SANTOS MACHADO", ra: "1132118074sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "IZABELA CASTRO ALVES", ra: "1148352910sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "WALACE CIPRIANO DOS SANTOS", ra: "1132076353sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "PEDRO HENRIQUE MAURICIO DA SILVA CHAGAS", ra: "1140937571sp", turma: "2 SERIE G" },
  // --- 2 SERIE H ---
  { nome: "NICOLLY NEVES OZORIO", ra: "1122243406sp", turma: "2 SERIE H" },
  // --- 3 SERIE H ---
  { nome: "RAFAELLY RITHELLY VITORIO PIMENTEL", ra: "0001111276262sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "LUCAS IUDI ARUEIRA FELIX", ra: "0001084846937sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "MARCOS VINICIUS SILVA LIMA", ra: "000113820464xsp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "LUCAS MELO DE ANDRADE", ra: "0001138595366sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "PIETRO SANTOS DIANA", ra: "0001114035786sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LUIZ FERNANDO LIMA DA SILVA", ra: "0001141411453sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "PIETRO DE OLIVEIRA BITENCOURT", ra: "0001141491540sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "LUIZ GUSTAVO DELMIRO DE SOUZA", ra: "0001132075981sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "PALOMA MARQUES DIOGENES", ra: "0001137248956sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "PEDRO LUCAS CRUZ PRIORI", ra: "0001158892263sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "RICHARD SAMUEL PEREIRA NASCIMENTO", ra: "0001214959817sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "PIETRO SOUZA SANTOS", ra: "0001165198307sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "LUIS FERNANDO PEREIRA GOMES", ra: "1214961368sp", turma: "6ANO D" },
  // --- 7ANO A ---
  { nome: "SOPHIA DUARTE MARTINS", ra: "1249418434sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "MARCELLY GUIOMAR MARTINS MAGALHAES SILVA", ra: "1165294771sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "EDUARDO ALVES RIBEIRO SANTOS", ra: "1138710751sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "FELIPE GABRIEL FERREIRA DOS SANTOS", ra: "1150683521sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "PEDRO HENRIQUE MARTINS TOLENTINO", ra: "1150679426sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "MIRELA REBECA JESUINO PEREIRA DOS SANTOS", ra: "0001238487075sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "MATHEUS SOARES DA SILVA CORREIA", ra: "0001208106016sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "PEDRO HENRIQUE GERALDO ANDRADE", ra: "0001132244146sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "MILENA BEATRIS MATIAS RIBEIRO", ra: "0001150722162sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "MIGUEL SARTORI MENDES", ra: "0001150732908sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "MATHEUS FELIPE RIBEIRO DOS SANTOS", ra: "0001165173219sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "MILTON NEVES TEIXEIRA", ra: "0001132152446sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "LIVIA DE SOUZA BARROS", ra: "0001132112539sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "NATHALIA NEVES OZORIO", ra: "0001141533200sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "MARCELLA DA SILVA PRIETO", ra: "0001141503827sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "LARISSA LOPES MOREIRA", ra: "0001229568268sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "LARISSA GIRON LANZA", ra: "0001148259909sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "KAMILLY ARAUJO DA SILVA", ra: "0001132221572sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "JULLYA SANTOS MARTINS", ra: "0001150820081sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "MARIA CECILIA VALENCIO PIRES", ra: "0001141614406sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "LUANN ABADE DA SILVA DANTAS", ra: "0001141541051sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "MELYSSA NUNES DE CARVALHO", ra: "1114035592sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "PIETRA DIAS FONSECA", ra: "1113115774sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "NATALIA PEREIRA DIAS", ra: "1132193874sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "ROBSON DOS ANJOS LISBOA DA SILVA", ra: "1122236438sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "RICARDO MARCELO OLIVEIRA GOMES DA SILVA", ra: "1132169598sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "SARAH DE CAMPOS", ra: "1117100807sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "THIAGO HENRIQUE OLIMPIO PEREIRA", ra: "110128769xsp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "WESLEY DE MORAES SILVA", ra: "1122275067sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "PYETRA GOMES MARTINS", ra: "1141681717sp", turma: "2 SERIE G" },
  // --- 3 SERIE H ---
  { nome: "RAYANE MARYA TOME GALDINO", ra: "0001123401019sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "MARIA JULIA ALVES SOARES", ra: "0001122242189sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "MARIA RITA GUERRA DOS SANTOS", ra: "000112056671xsp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "MARIA LUISA RAMOS", ra: "0001103824259sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "PIETRO TEIXEIRA TANGERINA", ra: "0001138774297sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "LUIZ FERNANDO NOGUEIRA BATISTA", ra: "0001132184812sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "RAFAEL CAMARGO NASCIMENTO", ra: "0001101467320sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "MARCOS VINICIUS RAMALHO BRUSAFERRO", ra: "0001122093998sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "PIETRO JOSE SILVA NOVAES", ra: "0001122125033sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "PIETRO OLIVEIRA FREITAS", ra: "0001239267927sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "SARA CAROLINE FONSECA PORFIRIO", ra: "000121622237xsp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "PIETTRO SORRILHA SOUZA", ra: "0001214814657sp", turma: "6ANO C" },
  // --- 6ANO D ---
  { nome: "MARIA LUIZA GOMES DA SILVA", ra: "1223581871sp", turma: "6ANO D" },
  // --- 7ANO A ---
  { nome: "CAMILY VITORIA BRITI FERREIRA", ra: "1158773936sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "MARIA VITORIA ALVES DE FARIA", ra: "1216263279sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "EMANUELLY RODRIGUES VIEIRA", ra: "1165029194sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "MARIA CLARA SILVA DE JESUS BRITO", ra: "121490466xsp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "SOPHIE SALLES DO NASCIMENTO", ra: "1150701602sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "OLIVIA ADRIANA GUTIERREZ BARBOSA", ra: "0001141304673sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "MIGUEL LUIZ CARDOSO", ra: "0001141437594sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "PIETRO ANTONIO DOS SANTOS RIBEIRO", ra: "0001206252650sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "MILLENA DOS SANTOS OLIVEIRA", ra: "0001150732945sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "NAIARA OLIVEIRA SOUZA", ra: "0001215652343sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "MONIQUE MONTAGNOLI DO NASCIMENTO", ra: "0001141439694sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "NATHALYA SOPHIE BARREIROS PINTO", ra: "000115076272xsp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "LUIS FERNANDO DO NASCIMENTO", ra: "0001150775944sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "PEDRO RIQUELME PIRES NASCIMENTO", ra: "0001150784222sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "MARIA EDUARDA BARBOSA DE OLIVEIRA", ra: "0001132120512sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "LIVIA FERREIRA GUIMARAES", ra: "0001142615984sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "LUAN ARAUJO LUNA", ra: "0001120587670sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "KEMELLY VITORIA RODRIGUES FRANCO SUZART", ra: "0001141535579sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "KESIA CRISTINA DINIZ", ra: "0001230488388sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "MATHEUS FERNANDEZ SCARPIN", ra: "0001132076109sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "LUCIANO MOREIRA DOS SANTOS FILHO", ra: "000112226690xsp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "MIGUEL ALVAREZ MARQUEZ CAETANO", ra: "1101287640sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "RAIANI SANTOS SILVA", ra: "1136059489sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "NIARA RODRIGUES DOS SANTOS SILVA", ra: "1152472598sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "RYAN PAULINO SANTOS FERREIRA", ra: "1132084490sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "SAMIA FERREIRA DA CRUZ", ra: "1134735455sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "VINICIUS HENRY DE ALMEIDA ARAUJO", ra: "1141002863sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "LIVIA DO CARMO MARANHA", ra: "1104893290sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "YAN HINTZE GONCALVES MEIRA", ra: "1126226506sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "RHUAN LIMA OLIVEIRA", ra: "1122272169sp", turma: "2 SERIE G" },
  // --- 3 SERIE H ---
  { nome: "VALTER DAYRELL BRUMATTI", ra: "0001120071070sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "PAULA MARELIN QUENALLATA COCARICO", ra: "0001102175079sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "MARIANA OLIVEIRA DOS SANTOS", ra: "0001122299588sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "MATEUS ERIC HUANCA QUINO", ra: "0001101454829sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "RAISSA APARECIDA SANTOS SILVA", ra: "0001136041436sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "NICOLE CORUJO SANTOS", ra: "0001118603205sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "RODRIGO GONCALVES FERREIRA", ra: "0001141531410sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "MARIA EDUARDA DE ALMEIDA LUCIANO", ra: "000110489337sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "RAPHAEL CAVALCANTI DA COSTA", ra: "0001101025694sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "RAFAEL ALVES ROCHA", ra: "0001242511362sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "SOPHIA RIBEIRO SANTOS", ra: "0001165214702sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "RAFAELA FARIA SILVA", ra: "0001218585894sp", turma: "6ANO C" },
  // --- 7ANO A ---
  { nome: "GABRIEL EDGARD OLIVEIRA MARTINS", ra: "1141620716sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "RAFAEL RODRIGUES SOUZA", ra: "1214913106sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "FELIPE BARBOSA DA SILVA", ra: "1141696381sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "MARIA VITORIA DE ALCANTARA OLIVEIRA", ra: "1141571535sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "VINICIUS FOGAGNOLI SOUZA", ra: "1158914568sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "PEDRO HENRIQUE DA SILVA CUNHA", ra: "0001148119218sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "MURILO GUEDES AZEVEDO", ra: "0001208020985sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "PIETRO FERRAZ VANALLI", ra: "0001150750601sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "NICOLLY KIMBERLY DE SANTANA", ra: "0001134877596sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "NATHAN DE SOUZA ANDRADE", ra: "0001150819455sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "PABLO HENRIQUE BATISTA DE JESUS", ra: "0001141598759sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "NICOLAS RAMPAZZO MARTINKOWITSH", ra: "0001150775786sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "MARIA EDUARDA DE SOUZA RIBEIRO", ra: "0001158865764sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "RAFAELA ALMEIDA MUNIZ", ra: "0001167285700sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "MARIA EDUARDA SANTOS REIS", ra: "0001132164862sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "LUAN DA SILVA JESUS", ra: "0001141679346sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "LUISA VIEIRA GIUFFRIDA", ra: "0001130425356sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "LAURA DOS SANTOS CARLINI SILVA", ra: "0001132211335sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "KETHELY VICTORIA SOUZA DOS SANTOS", ra: "0001122298791sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "MAYRON JHONNY MESSIAS SILVA DOS SANTOS", ra: "0001117350526sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "MARIA CLARA CORREA CONSTANTINO", ra: "0001141496422sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "NATALIA PEREIRA DIAS", ra: "1132193874sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "RAYANNE VICTORIA MONTEIRO DA SILVA", ra: "1122264756sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "PEDRO HENRIQUE BERTHOLINO GUERRA", ra: "1132140390sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "STEFANY CRISTINA MONTEIRO GENEROSO", ra: "1141421616sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "SARAH RODRIGUES MARTINS", ra: "113223122xsp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "YGOR FIDELIS XAVIER DA SILVA", ra: "1132098142sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "LUIS FELIPE CONCEICAO BEZERRA", ra: "1141655597sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "YASMIM MOREIRA GOMES", ra: "1132064247sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "STELLA MARTINS DA SILVA", ra: "112231937xsp", turma: "2 SERIE G" },
  // --- 3 SERIE H ---
  { nome: "VICTOR RIQUELME COMBE DO NASCIMENTO", ra: "0001167329934sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "PEDRO HENRIQUE DE FRANCA", ra: "0001132225085sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "MIKAELLY TAVARES ALVES", ra: "0001141642414sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "MIRELLA BELTRANE DA SILVA", ra: "0001117876780sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "RAYSSA FERREIRA RIBEIRO", ra: "0001132042276sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "PEDRO MOURA BRAGA SANTOS", ra: "000114146259xsp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "RYAN MOREIRA PEIXOTO", ra: "0001122278007sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "MATEUS FELIPE DE SANTANA", ra: "0001111283552sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "RAQUEL SILVA BARBOSA", ra: "0001122097992sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "RIQUELME SOTERO RODRIGUES", ra: "0001230138705sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "THAYLA EMANOELLY ANDRADE FIDELIS", ra: "0001223583648sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "SOFIA GOMES DANTAS", ra: "0001223579657sp", turma: "6ANO C" },
  // --- 7ANO A ---
  { nome: "GABRIELLY BEATRIZ SANTOS MARTINS", ra: "1141638629sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "RAPHAEL OLIVA SALVAIA", ra: "1150679256sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "GABRIEL JUNIOR RODRIGUES DO NASCIMENTO", ra: "1165041376sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "MIGUEL PEREIRA COSTA", ra: "1158877365sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "VITHOR MIGUEL LIMA PEREIRA", ra: "1214951466sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "RAPHAEL HENRIQUE RODRIGUES DOS SANTOS", ra: "000114156516xsp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "PEDRO HENRIQUE DA SILVA TORRES", ra: "0001148408459sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "REBECCA FALCAO SANTOS", ra: "0001166199046sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "RAYANE VITORIA SANTOS REIS", ra: "0001150708542sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "NICOLLAS LIMA RODRIGUES", ra: "0001141620510sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "PEDRO IBRAHIMOVIC COGO DE OLIVEIRA", ra: "0001142537493sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "PIETRO ALBERTO MARQUES COSSA", ra: "0001150782316sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "MARIA VITORIA DE MORAIS DA SILVA", ra: "0001150775828sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "RAYANNY DA SILVA DOS SANTOS ANDRADE", ra: "0001150803034sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "MAYA PIRES VERARDO", ra: "0001208111681sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "LUCA GEOVANI SILVA LIMA PASSOS", ra: "0001141441317sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "MANUELLA AUGUSTA ALVES DAMACENO", ra: "000113210290xsp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "MARCELA ZAFFARANI MOREIRA", ra: "000114215869xsp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "LAYS HELENA BRUM", ra: "0001132235583sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "NATALLY LORRAINE SOUZA MELO", ra: "000115084016xsp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "MAYCON HENRIQUE DOS SANTOS DOMINGOS", ra: "0001132152707sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "NIARA RODRIGUES DOS SANTOS SILVA", ra: "1152472598sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "REBECA SANTOS DE OLIVEIRA", ra: "1129096506sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "PEDRO HENRIQUE SANTOS COELHO", ra: "1103548517sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "TAYLLER GABRIEL FERREIRA SANTANA", ra: "1151272851sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "SARAH SANTOS OLIVEIRA", ra: "1132236149sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "YRIS RAYANE ALVES DA SILVA", ra: "1122170506sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "LUIS HENRIQUE NASCIMENTO RUSSO", ra: "1154301333sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "YASMIM VITORIA PIRES DOS SANTOS", ra: "1122212367sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "THAINA FIDELIS XAVIER DA SILVA", ra: "1122229148sp", turma: "2 SERIE G" },
  // --- 3 SERIE H ---
  { nome: "VITOR GABRIEL BEZERRA DE SOUZA", ra: "0001101287573sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "RAFAEL DANTAS PEREIRA", ra: "0001122277064sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "MILLENA VITORIA VICENTE DAS VIRGENS", ra: "0001148073140sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "NATA FRANCA CARVALHO DE SANTANA", ra: "0001122235239sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "RENAN LIMA ARRABAL", ra: "0001130305090sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "PEDRO SHISHIDO FERREIRA", ra: "0001141925369sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "VINICIUS FERREIRA GOMES", ra: "0001122197433sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "PEDRO HENRIQUE MENDES CRUZ", ra: "0001132073716sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "RYAN MAGALHAES MATOS", ra: "0001122166308sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "SOPHIA GIOVANA OLIVEIRA ALVES", ra: "0001165213643sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "VITORIA YASMIN FIRMINO DE OLIVEIRA", ra: "0001214940390sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "TAYANK ROBER LIMACHI CHOQUE", ra: "0001158909160sp", turma: "6ANO C" },
  // --- 7ANO A ---
  { nome: "MANUELA SOUSA SANTOS", ra: "1158862349sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "SABRINA DE SOUZA CAVALCANTE", ra: "1158903054sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "GRAZIELLI CRISTINA PEREIRA ARAUJO", ra: "1141681742sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "NICOLE ANDRADE MARQUES", ra: "1146489195sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "MIGUEL DE OLIVEIRA", ra: "1214945806sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "RAPHAELA XAVIER DA SILVA", ra: "0001157341524sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "RICHARD GONCALVES CORREA", ra: "0001165205373sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "REBECCA SANTOS VALERIO", ra: "0001150754370sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "RYAN GONCALVES FERREIRA", ra: "0001158901999sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "NICOLLY LIMA RODRIGUES", ra: "0001141616713sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "SARA VITORIA LOPES DOS SANTOS", ra: "0001150768939sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "SABRYNA AMORIM DE SOUSA", ra: "0001141551603sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "MARLON RAI OLIVEIRA OLINO", ra: "0001150774721sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "RUAN GUILHERME SILVA SANTOS", ra: "0001153001949sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "MAYARA FEITOSA COSTA", ra: "0001141672133sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "LUIZ FERNANDO MORETAO DE SOUSA", ra: "0001141531057sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "MARIA EDUARDA BATISTA PRADO", ra: "0001147544128sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "MARIA EDUARDA CHAGAS CARDOSO", ra: "0001150809115sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "LAYSLLA RAYANNE EDUARDO DA SILVA", ra: "0001132186523sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "NATHAN ANNIBAL DA SILVA", ra: "0001141649664sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "MESSIAS ALEXANDRE MORAES SANTANA", ra: "0001132141163sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "PEDRO HENRIQUE BERTHOLINO GUERRA", ra: "1132140390sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "ROBSON DOS ANJOS LISBOA DA SILVA", ra: "1122236438sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "RAFAEL DA SILVA NEVES", ra: "1142438028sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "THALYTA MARTIM ASSIS DO NASCIMENTO", ra: "1159956662sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "SOFIA DA ROCHA PRATES", ra: "1141693860sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "KAIC BRUNO FELINTO DA SILVA", ra: "1104994604sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "MARCOS VINICIUS DA SILVA SOARES", ra: "1120295890sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "PEDRO ENRIQUE SILVA LOPES", ra: "1114026657sp", turma: "2 SERIE F" },
  // --- 2 SERIE G ---
  { nome: "VITORIA SANTOS TEIXEIRA", ra: "1111267923sp", turma: "2 SERIE G" },
  // --- 3 SERIE H ---
  { nome: "WALACE SANTOS MACHADO DE FASIO", ra: "0001130867584sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "RIAN MONTAGNOLI DO NASCIMENTO", ra: "000110489418xsp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "PEDRO HENRIQUE SOUZA LIMA", ra: "0001122129087sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "NICOLE XAVIER DOS SANTOS", ra: "0001132121851sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "RHUAN LIMA OLIVEIRA", ra: "0001122272169sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "RENAN DA SILVA NASCIMENTO", ra: "0001122141907sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "WILLIAN BORGES LEAO", ra: "0001082510014sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "RAFAEL RODRIGUES DA SILVA", ra: "0001122090729sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "SARAH SANTOS ANDRADE", ra: "0001122138581sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "VINICIUS BESERRA ARAUJO", ra: "0001150679189sp", turma: "6ANO A" },
  // --- 6ANO B ---
  { nome: "WILLIAM ALVES CORAZZA", ra: "0001165227721sp", turma: "6ANO B" },
  // --- 6ANO C ---
  { nome: "VICTOR JUNIOR TENORIO COSTA", ra: "0001214927634sp", turma: "6ANO C" },
  // --- 7ANO A ---
  { nome: "PABLO GABRIEL FERNANDES DE SOUZA", ra: "1141426511sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "VITOR FERREIRA LIMA", ra: "1158915275sp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "KAUE QUIRINO DA SILVA", ra: "1132221274sp", turma: "7ANO C" },
  // --- 7ANO D ---
  { nome: "VITORIA ELOA BARBOSA DOS SANTOS", ra: "1141610061sp", turma: "7ANO D" },
  // --- 7ANO E ---
  { nome: "VINICIUS SILVA OLIVEIRA", ra: "1150772554sp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "RYAN MARIANO DE SOUZA", ra: "0001141691139sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "SOPHIA DO NASCIMENTO DOS SANTOS", ra: "0001158906456sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "RYAN BARROS ARRAES", ra: "0001165207114sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "RYAN RODRIGUES DE JESUS", ra: "000120836487xsp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "SOPHIA DE MACEDO FARIA", ra: "0001142693533sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "THAILA CRISTINA OLIVEIRA CARDOSO", ra: "000113215246xsp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "SAULO GONZAGA DA SILVA", ra: "0001141437776sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "MILENA DA SILVA PRIETO", ra: "0001150775919sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "SAMUEL MARQUES DOS SANTOS", ra: "000114169055xsp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "MYRELLA HIANNA FRANQS GONCALVES", ra: "0001122116652sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "MARIA EDUARDA CARVALHO DOS SANTOS", ra: "0001132120147sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "MATHEUS LUCAS LISBOA GAMA (MARIA LUIZA LISBOA GAMA)", ra: "0001130582681sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "MARIA RITA PIOVESAN DE SOUZA", ra: "0001141470974sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "LEONARDO SOBREIRA PRADO DE OLIVEIRA", ra: "0001141628491sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "NICKOLAS HENRIQUE MATOS FERREIRA", ra: "0001122286478sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "NICOLLAS GUILHERME FREITAS COSTA DE MORAIS", ra: "0001122230722sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "PEDRO HENRIQUE SANTOS COELHO", ra: "1103548517sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "RYAN PAULINO SANTOS FERREIRA", ra: "1132084490sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "RAPHAELLA VITORIA DOS SANTOS", ra: "1122237959sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "THIAGO CLARINDO DA SILVA", ra: "1122244976sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "SOPHIA ANTONELLA MARIN QUINTINO VITTI", ra: "1132150760sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "AUGUSTO CESAR LOBATO DE BRITO", ra: "1132094434sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "MURILO BENICIO FREITAS RICARTE", ra: "1122114941sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "MONIQUE PEREIRA ROUGER", ra: "1122131471sp", turma: "2 SERIE F" },
  // --- 3 SERIE H ---
  { nome: "WILLIAN JERONIMO DA ROCHA JUNIOR", ra: "0001112995869sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "RICHARD MENDES GONCALVES DIAS", ra: "0001101392149sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "PEDRO LUIZ RODRIGUES PREVIATO LARANJEIRA", ra: "0001122237832sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "NOEMI VITORIA OLIVEIRA SALZANO", ra: "0001158885611sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "RHYAN PEREIRA ZAFFARANI", ra: "000111403129xsp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "RHIAN PEDRO LIRIA PETRI PEREIRA", ra: "0001111273066sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "YASMIM APARECIDA ANDRADE", ra: "0001132163146sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "RAPHAELA LORRANY DOS SANTOS RODRIGUES", ra: "0001122288463sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "VALENTINA DE ASSIS MOTA", ra: "0001104061958sp", turma: "3 SERIE ADM A" },
  // --- 6ANO A ---
  { nome: "VINICIUS RIBEIRO AMARAL ABRAHAO", ra: "000116522317xsp", turma: "6ANO A" },
  // --- 7ANO A ---
  { nome: "NEYLI AYLEN VICENTE GALLEGO", ra: "1265928058sp", turma: "7ANO A" },
  // --- 7ANO B ---
  { nome: "WILLIAN ALLAN REZENDE INHESTA", ra: "115069273xsp", turma: "7ANO B" },
  // --- 7ANO C ---
  { nome: "RENATO GABRYEL MARTINS LOPES", ra: "1158899415sp", turma: "7ANO C" },
  // --- 7ANO E ---
  { nome: "ALLAN HENRIQUE ALVES DE OLIVEIRA", ra: "115864825xsp", turma: "7ANO E" },
  // --- 8ANO A ---
  { nome: "SAMIRA OLIVEIRA DA SILVA", ra: "0001150718742sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "THAIS BARBOSA SANCHES", ra: "0001132221018sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "SAMUEL NOBRE MARTINS CANDIDO SILVA", ra: "0001153503761sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "SOPHIA ANDRADE DE SOUSA SILVA", ra: "000116521233xsp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "TYLLER RODRIGUES PIRES SANTOS", ra: "0001212619614sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "THIAGO MOTA DE SOUZA", ra: "0001158912171sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "TAMARA VITORIA MATIAS RIBEIRO", ra: "000114149470xsp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "MYLLENA SILVA BARBOSA", ra: "0001150784015sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "SOPHIA FERREIRA DE QUEIROZ", ra: "0001149237739sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "NICOLAS LUAN DOS SANTOS SILVA", ra: "0001160444912sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "MARIA EDUARDA RIBEIRO DOS SANTOS", ra: "0001132151156sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "MIGUEL OLIVEIRA DOS SANTOS", ra: "0001142604779sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "MARYANNA CLEA TANCREDO DE SANTANA", ra: "0001147839803sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "LUAN VICTOR DOS SANTOS", ra: "000114146665xsp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "PABLO VINICIUS NASCIMENTO SILVA", ra: "0001254836330sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "NICOLLAS MOURA DE MELLO", ra: "0001122235537sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "RAPHAELLA VITORIA DOS SANTOS", ra: "1122237959sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "SAMUELL DO SANTO DAMASCENO", ra: "1122273812sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "ROBERTA OLIVEIRA LOPES", ra: "1122201709sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "VITORIA CONCEICAO NASCIMENTO", ra: "1122244885sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "THAMIRIS MARIA DA SILVA", ra: "1150898562sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "BHEATRIZ DE SOUZA SILVA", ra: "1147465113sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "NICOLLY BARBOSA DE SOUZA", ra: "1132196942sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "MELISSA VITORIA MONTEIRO GENEROSO", ra: "1122170762sp", turma: "2 SERIE F" },
  // --- 3 SERIE H ---
  { nome: "YRIS RAYANE ALVES DA SILVA", ra: "0001122170506sp", turma: "3 SERIE H" },
  // --- 3 SERIE A ---
  { nome: "STEFANY ALVES BARBOSA", ra: "000112224230xsp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "RAFAELLA NICOLLY DIAS REZENDE", ra: "0001141698845sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "PAOLA MARQUES DE OLIVEIRA", ra: "0001122262565sp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "TAYLOR FERREIRA DA SILVA VASCONCELOS", ra: "0001104894208sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "RONALDO DO NASCIMENTO PIRES", ra: "0001105026279sp", turma: "3 SERIE E" },
  // --- 3 SERIE F ---
  { nome: "YTHALO HENRIQUE FELIX DE MORAES", ra: "0001141701777sp", turma: "3 SERIE F" },
  // --- 3 SERIE G ---
  { nome: "REBECA RAYANE GAMBETA DE SANTANA", ra: "0001103901801sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "VICTOR DA SILVA SANTOS", ra: "0001141879980sp", turma: "3 SERIE ADM A" },
  // --- 7ANO B ---
  { nome: "YASMIM CASTELHANO GONZAGA", ra: "1165228348sp", turma: "7ANO B" },
  // --- 8ANO A ---
  { nome: "TAYRON RAYRYON DA SILVA ESTEVAM", ra: "000114141627xsp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "VITORIA PIOVESAN DE SOUZA", ra: "0001150750042sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "SAMUEL SANKLLER DE SOUZA BRITO", ra: "0001136989444sp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "VITOR SOUSA OLIVEIRA", ra: "0001150716381sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "VICTOR MIGUEL FERREIRA DA CRUZ", ra: "0001135078051sp", turma: "8ANO E" },
  // --- 9ANO A ---
  { nome: "YURI OLIVA DOS SANTOS", ra: "0001132156051sp", turma: "9ANO A" },
  // --- 9ANO B ---
  { nome: "THALITA BRITO CAMARGO", ra: "0001132151016sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "NICOLAS HENRICK CARVALHO GONCALVES", ra: "0001141682515sp", turma: "9ANO C" },
  // --- 9ANO D ---
  { nome: "VERONICA LIMA MONTEIRO", ra: "0001158912791sp", turma: "9ANO D" },
  // --- 1 SERIE A ---
  { nome: "NICOLLY SANTOS CERCONI", ra: "0001132106795sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "MELISSA RADJA SILVA TRINDADE", ra: "0001141563101sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "PEDRO HENRIQUE NUNES MARTINS", ra: "0001119323113sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "MATHEUS FERNANDES JARDIM", ra: "000113211620xsp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "MARIA EDUARDA SATURNINO CUNHA", ra: "0001142578914sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "PEDRO HENRIQUE FERREIRA DOS SANTOS LOPES", ra: "0001141543151sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "NICOLLY GONCALVES SANTOS", ra: "0001122125811sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "ROBERTA OLIVEIRA LOPES", ra: "1122201709sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "SOPHIA ANTONELLA MARIN QUINTINO VITTI", ra: "1132150760sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "SARAH CRISTINA OZORIO DE ALMEIDA", ra: "1142207031sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "WILLIAM PINHEIRO DE SOUZA SANTOS", ra: "1104008324sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "VICTOR DOS SANTOS MARQUES", ra: "1132099353sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "BIANCA CARVALHO BRANDAO", ra: "1141616750sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "NUBIA ARAUJO MUNIZ", ra: "1132060333sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "GABRIEL MARQUES DA SILVA", ra: "1122120722sp", turma: "2 SERIE F" },
  // --- 3 SERIE A ---
  { nome: "THIAGO MAIA DE FREITAS", ra: "0001132095165sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "SAMIRA MATOS NOGUEIRA CITRINITI", ra: "0001122214741sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "QUEREN HAPUQUE DE OLIVEIRA FERREIRA", ra: "000113259750xsp", turma: "3 SERIE C" },
  // --- 3 SERIE D ---
  { nome: "VICTOR BORGES DE MORAES", ra: "0001122096525sp", turma: "3 SERIE D" },
  // --- 3 SERIE E ---
  { nome: "STELLA PEREIRA RABELO", ra: "0001122237479sp", turma: "3 SERIE E" },
  // --- 3 SERIE G ---
  { nome: "YAGO JHOSHUA ALMEIDA DA SILVA", ra: "0001132572514sp", turma: "3 SERIE G" },
  // --- 3 SERIE ADM A ---
  { nome: "WAGNER MATHEUS DE ARAUJO DIAS", ra: "0001127513011sp", turma: "3 SERIE ADM A" },
  // --- 8ANO A ---
  { nome: "VICTOR DUARTE RODRIGUES", ra: "0001135127670sp", turma: "8ANO A" },
  // --- 8ANO B ---
  { nome: "WENDELL ANTONY SANTOS DE LIMA", ra: "0001230156471sp", turma: "8ANO B" },
  // --- 8ANO C ---
  { nome: "SOFYA FERNANDES FREITAS BORGES", ra: "000115890731xsp", turma: "8ANO C" },
  // --- 8ANO D ---
  { nome: "YASMIM DE OLIVEIRA SANTANA", ra: "0001160660803sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "WENDEL HENRIQUE DA SILVA", ra: "---", turma: "8ANO E" },
  // --- 9ANO B ---
  { nome: "VINICIUS TAKASHI DE SOUSA WADA DA SILVA", ra: "0001150768800sp", turma: "9ANO B" },
  // --- 9ANO C ---
  { nome: "PEDRO HENRIC VAJALEGRE ANDRADE", ra: "0001128832938sp", turma: "9ANO C" },
  // --- 1 SERIE A ---
  { nome: "OTAVIO AUGUSTO OMENA DRAGO", ra: "0001141465280sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "MOISES MARQUES DA SILVA", ra: "0001132217258sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "PEDRO HENRIQUE QUEIROZ LIMA", ra: "0001139335108sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "MIGUEL ANTONIO DE OLIVEIRA DUARTE", ra: "0001149236917sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "MATHEUS MOLINA PROCOPIO BARBOSA", ra: "0001132231048sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "PEDRO HENRIQUE SALVAIA SANCHES", ra: "0001141442838sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "PABLO ENRIQUE AMERICO DE LIMA", ra: "000110494361xsp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "SARAH CRISTINA OZORIO DE ALMEIDA", ra: "1142207031sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "STEFANY CRISTINA MONTEIRO GENEROSO", ra: "1141421616sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "SARAH DE OLIVEIRA SANTOS", ra: "1141471115sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "PIETRA DIAS FONSECA", ra: "1113115774sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "RYAM WALKER MATEUS SALES", ra: "1122281699sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "BRUNO KAZUYA AKAI", ra: "1122218886sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "PEDRO HENRIQUE DOS SANTOS FERREIRA", ra: "113214842xsp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "DOUGLAS MOREIRA DE OLIVEIRA", ra: "1099757484sp", turma: "2 SERIE F" },
  // --- 3 SERIE A ---
  { nome: "VICTOR HUGO SOUZA NUNES", ra: "0001132216746sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "SAMUEL QUERINO TRESSINO", ra: "0001132199815sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "RAFAEL MACHADO SIMOES", ra: "0001122152309sp", turma: "3 SERIE C" },
  // --- 3 SERIE E ---
  { nome: "VICTOR MATEUS LIMA ROCHA", ra: "0001092495101sp", turma: "3 SERIE E" },
  // --- 3 SERIE G ---
  { nome: "YASMIM HOLANDA DO NASCIMENTO", ra: "0001132067650sp", turma: "3 SERIE G" },
  // --- 8ANO D ---
  { nome: "YASMIN RODRIGUES D'ASSUNCAO", ra: "0001141543643sp", turma: "8ANO D" },
  // --- 8ANO E ---
  { nome: "YANKA BEATRIZ RODRIGUES DO NASCIMENTO", ra: "---", turma: "8ANO E" },
  // --- 1 SERIE A ---
  { nome: "RAYZON DE JESUS SANTOS", ra: "0001227972544sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "NICOLAS ALVES POLIZELI", ra: "0001132069270sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "RAFAEL MOREIRA RODRIGUES", ra: "0001132062366sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "MURILO LIMA MERCE", ra: "0001117763559sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "MAYCON GABRIEL DOS SANTOS TOLENTINO", ra: "0001132097423sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "PIETRO RODRIGUES FERREIRA", ra: "0001132149307sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "RYAN DE SOUZA LIMA", ra: "0001122243601sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "SARAH DE OLIVEIRA SANTOS", ra: "1141471115sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "TAYLLER GABRIEL FERREIRA SANTANA", ra: "1151272851sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "TALITA RODRIGUES DE SOUZA CARDOSO", ra: "1094178093sp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "THAINA OLANDA DE MORAIS", ra: "1122238277sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "ISABELE GONCALVES DOS REIS", ra: "1101285989sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "EDUARDO LIMA EVANGELISTA", ra: "1123043528sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "PIETRO RODRIGUES MELO OLIVEIRA", ra: "1141674026sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "BRYAN FERNANDES", ra: "1132237658sp", turma: "2 SERIE F" },
  // --- 3 SERIE A ---
  { nome: "VICTOR RODRIGUES GOMES DOS SANTOS", ra: "000115145669xsp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "TIAGO HENRIQUE CARDOSO FERREIRA DA SILVA", ra: "0001122137497sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "RAYSSA DOS SANTOS ANDRADE", ra: "0001132069154sp", turma: "3 SERIE C" },
  // --- 3 SERIE E ---
  { nome: "YASMIN KHETELYN MARTINS DA SILVA", ra: "0001132174624sp", turma: "3 SERIE E" },
  // --- 3 SERIE G ---
  { nome: "YASMIN APARECIDA ONORIO SANTOS", ra: "0001101287986sp", turma: "3 SERIE G" },
  // --- 1 SERIE A ---
  { nome: "REBECA DE OLIVEIRA FERREIRA", ra: "0001221408604sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "NICOLAS LUCA SILVA BUJALDON", ra: "0001125570490sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "RENAN MOREIRA PEGORARO", ra: "0001141555335sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "NICOLAS ROQUE DO SANTOS", ra: "000113509374xsp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "MELISSA GABRIELLY SILVA MIGUEL", ra: "0001141626810sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "POLIANA PEREIRA MEGDA BATISTA", ra: "0001122180111sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "THIAGO VIEIRA DA SILVA", ra: "0001128867850sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "TALITA RODRIGUES DE SOUZA CARDOSO", ra: "1094178093sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "THAINA OLANDA DE MORAIS", ra: "1122238277sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "VITORIA MARIA COSTA", ra: "112226320xsp", turma: "2 SERIE A" },
  // --- 2 SERIE B ---
  { nome: "JORDAN DE MELLO FRANCO", ra: "1114030028sp", turma: "2 SERIE B" },
  // --- 2 SERIE C ---
  { nome: "FILIPE FOGAGNOLI SOUZA", ra: "1105019330sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "GUILHERME HENRIQUE BEZERRA DE OLIVEIRA", ra: "1114017346sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "RAYANNE VICTORIA MONTEIRO DA SILVA", ra: "1122264756sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "GABRIEL DA SILVA ARAUJO", ra: "1132122028sp", turma: "2 SERIE F" },
  // --- 3 SERIE A ---
  { nome: "VINICIUS HOLANDA GONCALVES", ra: "0001122238393sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "VALTERONE NOVAES DE SOUSA FILHO", ra: "0001114030016sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "RAYSSA RAMOS DOS SANTOS", ra: "0001114030910sp", turma: "3 SERIE C" },
  // --- 3 SERIE G ---
  { nome: "MYLENA OLIVEIRA", ra: "0001122319423sp", turma: "3 SERIE G" },
  // --- 1 SERIE A ---
  { nome: "RHAYSSA DOS SANTOS PEREIRA", ra: "0001141514370sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "NYCOLAS RODRIGUES DE ALMEIDA VIEIRA", ra: "0001122160628sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "RICARDO DOS SANTOS ROCHA", ra: "0001132240050sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "NYCOLLY PINHEIRO DA SILVA", ra: "0001132095451sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "MIGUEL PIRES SANTOS ALVES", ra: "0001132242514sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "RAQUEL DA SILVA ARAUJO", ra: "0001147767397sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "VICTOR GUSTAVO SILVA LEITE ARRUDA", ra: "0001122253977sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "VITORIA MARIA COSTA", ra: "112226320xsp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "THALYTA MARTIM ASSIS DO NASCIMENTO", ra: "1159956662sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "WANDRELL ABRAAO DE OLIVEIRA SERQUEIRA", ra: "1212356494sp", turma: "2 SERIE A" },
  // --- 2 SERIE C ---
  { nome: "LUAN GOUVEIA BONFANTE", ra: "1132102601sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "GUILHERME NASCIMENTO DA SILVA", ra: "1151135744sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "RIAN MATHEUS DOS SANTOS", ra: "1094115010sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "GEOVANA BARBOSA DE CASTRO", ra: "1122112300sp", turma: "2 SERIE F" },
  // --- 3 SERIE A ---
  { nome: "YASMIM DONATO DOS SANTOS", ra: "0001132053237sp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "VIVIANE PINHEIRO SILVA", ra: "0001104928838sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "RIQUELME HORTENCIO DOS SANTOS", ra: "0001122130867sp", turma: "3 SERIE C" },
  // --- 1 SERIE A ---
  { nome: "RHYAN ROGERIO ALVES PEREIRA", ra: "0001141435949sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "PEDRO HENRIQUE LIMA DA SILVA", ra: "0001132078350sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "RYAN DE OLIVEIRA SANTOS MELO", ra: "0001120192365sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "OENDREW DE SOUZA CRISOSTOMO", ra: "0001132047559sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "MIRELLA MARTINS", ra: "0001132188659sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "RYAN KAUE SIQUEIRA DO NASCIMENTO", ra: "0001104894117sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "VINICIUS ALEXANDRE ALVES DA SILVA", ra: "0001111903104sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "WANDRELL ABRAAO DE OLIVEIRA SERQUEIRA", ra: "1212356494sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "THAUANY SANTOS SILVA", ra: "1141662310sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "WELLINGTON TAVARES DE BRITO OLIVEIRA FILHO", ra: "1142159334sp", turma: "2 SERIE A" },
  // --- 2 SERIE C ---
  { nome: "BRYAN VIEIRA SALES", ra: "1122130739sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "GUSTAVO DE OLIVEIRA VALLOTTA", ra: "1121357106sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "RYAN SOUSA RODRIGUES", ra: "1129618432sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "MARIA EDUARDA VALENTE MIRANDA", ra: "1141630448sp", turma: "2 SERIE F" },
  // --- 3 SERIE A ---
  { nome: "YGOR JHOSHUA ALMEIDA DA SILVA", ra: "000113257285xsp", turma: "3 SERIE A" },
  // --- 3 SERIE B ---
  { nome: "KOLLYN MAKEY DE JESUS DA SILVA", ra: "0001122297403sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "SAMUEL VITOR LIMA DA SILVA", ra: "000116521006xsp", turma: "3 SERIE C" },
  // --- 1 SERIE A ---
  { nome: "ROBERT CLIVER LIMACHI CHOQUE", ra: "0001141550283sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "PEDRO PRADO DE SOUSA", ra: "0001132128134sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "SAMUEL RYAN DA SILVA RIBEIRO", ra: "0001141495764sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "RAFAEL ANTONY LOPES SALES", ra: "0001132241789sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "MURYLLO SENATORE DOS SANTOS", ra: "0001141599387sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "RYAN NICACIO DO NASCIMENTO", ra: "0001122199363sp", turma: "1 SERIE F" },
  // --- 1 SERIE G ---
  { nome: "PEDRO AUGUSTO DE SOUZA", ra: "0001141450227sp", turma: "1 SERIE G" },
  // --- 2 SERIE ADM A ---
  { nome: "WELLINGTON TAVARES DE BRITO OLIVEIRA FILHO", ra: "1142159334sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE ADM B ---
  { nome: "THIAGO CLARINDO DA SILVA", ra: "1122244976sp", turma: "2 SERIE ADM B" },
  // --- 2 SERIE A ---
  { nome: "YASMIN DOS SANTOS GARCIA", ra: "1128965665sp", turma: "2 SERIE A" },
  // --- 2 SERIE C ---
  { nome: "MIGUEL ALVAREZ MARQUEZ CAETANO", ra: "1101287640sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "GUSTAVO RODRIGUES DA SILVA", ra: "1132037918sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "SAMUELL DO SANTO DAMASCENO", ra: "1122273812sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "ANA JULIA COSTA BATISTA", ra: "1120323708sp", turma: "2 SERIE F" },
  // --- 3 SERIE B ---
  { nome: "REBERTY HENRIQUE DA CONCEICAO", ra: "0001132041727sp", turma: "3 SERIE B" },
  // --- 3 SERIE C ---
  { nome: "TALYTA PEREIRA DA SILVA", ra: "0001141016813sp", turma: "3 SERIE C" },
  // --- 1 SERIE A ---
  { nome: "SAMUEL PAULINO DOS SANTOS", ra: "0001150833361sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "RENAN VIANA CAPUANI", ra: "0001150819649sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "SARA VICTORIA SIMOES DOS SANTOS", ra: "0001111282778sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "ROBERTA ALEIXO DIAS", ra: "0001141536730sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "PAULO HENRIQUE FLORIANO MAIA DA SILVA", ra: "0001132094367sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "SARAH LAYSLA ALVES MENDONCA", ra: "000113203579xsp", turma: "1 SERIE F" },
  // --- 2 SERIE ADM A ---
  { nome: "YASMIN DOS SANTOS GARCIA", ra: "1128965665sp", turma: "2 SERIE ADM A" },
  // --- 2 SERIE A ---
  { nome: "ANA BEATRIZ DE MORAES FREITAS", ra: "112227385xsp", turma: "2 SERIE A" },
  // --- 2 SERIE C ---
  { nome: "ARTHUR BATISTA MOURA", ra: "1125695183sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "HELENO VINICIUS MORAIS SILVA", ra: "1122158063sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "SARA LETICIA CAVALIERI", ra: "1141555554sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "ISABELA MARTUSCELLI DE SOUZA SILVA", ra: "1120237750sp", turma: "2 SERIE F" },
  // --- 3 SERIE C ---
  { nome: "YARA NAYANI DE SOUZA MARTINS", ra: "0001123263632sp", turma: "3 SERIE C" },
  // --- 1 SERIE A ---
  { nome: "SAMYRA MORAES SCHUMACHER", ra: "0001133735241sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "STEFANI NICOLE DE LIMA BALBINO", ra: "0001229677410sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "SARAH MARTINELLI ALVES", ra: "0001141440210sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "SAMUEL GONCALVES DA SILVA BARBOSA", ra: "0001150819339sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "RICARDO ALVES NASCIMENTO", ra: "0001132081816sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "SHERON MONTEIRO CUSTODIO", ra: "0001132232235sp", turma: "1 SERIE F" },
  // --- 2 SERIE C ---
  { nome: "ARTHUR HENRIQUE DE ALMEIDA SILVA", ra: "1122270719sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "JULIO CESAR DA SILVA SANTOS", ra: "1105005124sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "RAFAELA DIAS ARCANJO DOS SANTOS", ra: "1122125203sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "NICOLAS DAVI DOS SANTOS BERNADO", ra: "1142216160sp", turma: "2 SERIE F" },
  // --- 1 SERIE A ---
  { nome: "VICTORIA MARTINS DA SILVA BARBOSA", ra: "0001142598627sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "THAYLANE ROCHA DE OLIVEIRA SANTOS", ra: "0001111259525sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "THALITA IZABELY PEDROSO", ra: "0001150819182sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "TAYNA CRISTINA D'ASSUMPCAO SILVA", ra: "0001162594378sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "SAMUEL GERALDO ANDRADE", ra: "0001122236906sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "THAYNA ALVES DOS SANTOS", ra: "000113807245xsp", turma: "1 SERIE F" },
  // --- 2 SERIE C ---
  { nome: "VINICIUS CANDIDO RIBEIRO", ra: "1141573386sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "VITOR SILVA RAMOS", ra: "1156584322sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "FABIANO SOUZA OLIVEIRA", ra: "1215652471sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "MIRELLA BRITO DA SILVA", ra: "1122266224sp", turma: "2 SERIE F" },
  // --- 1 SERIE A ---
  { nome: "WESLEY ALVES DE AGUIAR", ra: "0001122110248sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "VICTORIA FIETTA SWINCIK", ra: "0001129521199sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "VALENTTINA ALVES XAVIER", ra: "0001132241704sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "THANDRACE ROBERTA VIEIRA", ra: "0001126290622sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "VINICIUS DIAS RAMOS", ra: "0001141684822sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "VICTOR HUGO ALVES OLIVEIRA", ra: "0001141624394sp", turma: "1 SERIE F" },
  // --- 2 SERIE C ---
  { nome: "BIANCA FERREIRA DE SOUZA", ra: "1132050133sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "WESLEY DOS SANTOS CORDEIRO", ra: "1122197081sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "ISABELLA DE SOUZA", ra: "1132215675sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "LUIZ HENRIQUE MENDES DOS SANTOS", ra: "1132148303sp", turma: "2 SERIE F" },
  // --- 1 SERIE A ---
  { nome: "YASMIN MARRA ABBAZIA", ra: "0001141639877sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "VINICIUS RECCO ARJONAS", ra: "0001141645002sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "VITOR HUGO DO NASCIMENTO CARVALHO", ra: "0001127690760sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "VITOR EDUARDO ALVES SOARES", ra: "0001132221183sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "YURI RAFAEL RIBEIRO AMORGADO", ra: "0001101464355sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "YAGO SANTOS DA SILVA", ra: "000115081536xsp", turma: "1 SERIE F" },
  // --- 2 SERIE C ---
  { nome: "THAMIRES APARECIDA PEREIRA DA SILVA LEITE", ra: "1132219292sp", turma: "2 SERIE C" },
  // --- 2 SERIE D ---
  { nome: "ANA CLARA FERREIRA FREITAS", ra: "1122244757sp", turma: "2 SERIE D" },
  // --- 2 SERIE E ---
  { nome: "MARIAH EDUARDA DOS SANTOS", ra: "1132224858sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "MICHEL FELIPE SILVA SANTOS", ra: "1141699837sp", turma: "2 SERIE F" },
  // --- 1 SERIE A ---
  { nome: "YUDITH DAFNE CHOQUE LIMACHI", ra: "0001158770467sp", turma: "1 SERIE A" },
  // --- 1 SERIE B ---
  { nome: "YAGO DA SILVA ROCHA", ra: "0001111263607sp", turma: "1 SERIE B" },
  // --- 1 SERIE C ---
  { nome: "YASMIN KARLA RAMONA DIAS", ra: "0001132199451sp", turma: "1 SERIE C" },
  // --- 1 SERIE D ---
  { nome: "YNGRID SOUTO DE JESUS", ra: "0001132870501sp", turma: "1 SERIE D" },
  // --- 1 SERIE E ---
  { nome: "FABIO HENRIQUE ANDRADE ROQUE", ra: "0001132105341sp", turma: "1 SERIE E" },
  // --- 1 SERIE F ---
  { nome: "YASMIM VITORIA APARECIDA DA CONCEICAO", ra: "0001141622993sp", turma: "1 SERIE F" },
  // --- 2 SERIE C ---
  { nome: "LUCAS GABRIEL DE ALENCAR OLIVEIRA", ra: "1154717513sp", turma: "2 SERIE C" },
  // --- 2 SERIE E ---
  { nome: "VINICIUS VILA PEREIRA", ra: "1110694490sp", turma: "2 SERIE E" },
  // --- 2 SERIE F ---
  { nome: "YURI SOUZA CANTOR", ra: "1141432821sp", turma: "2 SERIE F" },
];
