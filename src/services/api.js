import fs from 'fs';
import { join } from 'path';
/**
 * Importamos o matter para conseguirmos
 * buscar os dados do Markdown como um
 * objeto.
 */
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/posts');

function getMarkdownsFiles() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Criamos uma função para buscar detalhes
 * de um post específico, estamos exportando
 * essa função pois ela será usada na página
 * da postagem, onde não precisaremos buscar 
 * o conteúdo.
 */
export function getPost(slugOrFilename) {
  // Remover o .md do fim do arquivo
  const slug = slugOrFilename.replace(/\.md$/, '');
  // Buscando pelo nome do arquivo markdown, com o .md
  const directory = join(postsDirectory, `${ slug }.md`);
  // Ler o conteúdo do arquivo markdown
  const fileContents = fs.readFileSync(directory, 'utf8');
  /**
   * Buscar o seu conteúdo
   * Com o matter, o cabeçalho do Markdown
   * vem na chave data, e o conteúdo, dentro
   * do content.
   */
  const { data, content } = matter(fileContents);

  /**
   * Retornamos todo o conteúdo do markdown
   * junto com o slug.
   */
  return { content, slug, ...data };
}

/**
 * Criamos uma função para buscar
 * todos os posts. Exportamos também
 * para consegir buscar de dentro da página
 * de listagem de posts
 */
export function getAllPosts() {
  /**
   * Utilizamos a nossa função para
   * retornar um array com os nomes
   * dos markdowns que temos.
   */
  const slugs = getMarkdownsFiles();
  
  /**
   * Criamos uma map (um loop em cada
   * índice do array de slugs, que irá nos
   * retornar outro array) que chama uma
   * função para cada slug buscando detalhes
   * do post.
   */
  const posts = slugs
    .map(slug => getPost(slug))
    .sort((a, b) => new Date(b.datestamp) - new Date(a.datestamp));

  /**
   * Retornamos o post com
   * seus respectivos detalhes.
   */
  return posts;
}