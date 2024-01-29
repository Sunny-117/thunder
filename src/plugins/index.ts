import { importAnalysisPlugin } from "./importAnalysis";
import { preAliasPlugin } from "./preAlias";
import { resolvePlugin } from "./resolve";


export async function resolvePlugins(config) {
    return [
        preAliasPlugin(config),
        resolvePlugin(config),
        importAnalysisPlugin(config)
    ]
}