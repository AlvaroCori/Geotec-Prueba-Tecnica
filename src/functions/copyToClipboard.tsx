export default async function copyToClipboard(texto : string){
    try {
      await navigator.clipboard.writeText(texto);
    } catch (error) {
      console.error(error);
    }
};