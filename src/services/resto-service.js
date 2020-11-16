export default class RestoService {
    url = 'http://localhost:3004/menu';


    getMenuItems = async () => {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error('Server error');
        }
        return await response.json();
    }
}
