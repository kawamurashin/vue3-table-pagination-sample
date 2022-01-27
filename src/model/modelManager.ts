import {CommonEvent} from "@/events/commonEvent";

export class ModelManager extends EventTarget
{
    public static getInstance():ModelManager
    {
        if(this._instance == null)
        {
            this._instance = new ModelManager();
        }
        return this._instance;
    }
    private static _instance:ModelManager
    constructor() {
        super();
    }
    public get = () =>
    {
        this.getDataAsync().then(response => {
            this.getDataComplete(response);
        }).catch(() => {
            this.getDataComplete({"data": "error"})
        });
    }
    private getDataAsync = async () => {
        let data: any;
        const url = "/data.json";
        try {
            const response = await fetch(url);
            data = await response.json();
        } catch (e) {
            data = {"data": "error"}
        }
        return data;
    }
    private getDataComplete = (data: any): void => {
        const commonEvent: CommonEvent = new CommonEvent(CommonEvent.MODEL_GET_COMPLETE);
        commonEvent.data = data;
        this.dispatchEvent(commonEvent);
    }
}
