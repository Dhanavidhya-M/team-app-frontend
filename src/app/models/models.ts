
export interface Project{
    id?: number;
    title: string;
    description: string;
    startDate: string,
    endDate: string,
    user:User
}

export interface Task{
    id?: number;
    title: string;
    description: string;
    status: string;
    project: Project;
    user: User;
}

export interface User{
    id?:number;
    name: string;
    email: string;

}