import express from 'express';
import connectToDb from "./database/index";
import config from "./config";
import routes from "./route/route";


const app = express();
app.use(express.json());
app.use("/api", routes);


connectToDb()
const server = app.listen(config.port, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: http://localhost:${config.port} 🛡️
    ################################################
  `);
    
});
type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
