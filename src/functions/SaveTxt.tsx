export default function saveTxt (fact: string){
    const blob = new Blob([fact], { type: 'text/plain' });
    const link = document.createElement('a');  
    link.href = window.URL.createObjectURL(blob);
    link.download = Date.now().toString() + '-archivo.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};