export class Repository {
    constructor(public created_at: Date, public description: string,
        public homepage: string, public html_url: string,
        public forks_count: number, public full_name: string, public name: string, public subscribers_count: number,
        public watchers_count: number) {
    }
}
