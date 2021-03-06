import { ToolbarButtonLocation } from './types';
import Plugin from '../Plugin';
/**
 * Allows creating and managing toolbar buttons.
 *
 * [View the demo plugin](https://github.com/laurent22/joplin/CliClient/tests/support/plugins/register_command)
 */
export default class JoplinViewsToolbarButtons {
    private store;
    private plugin;
    constructor(plugin: Plugin, store: any);
    /**
     * Creates a new toolbar button and associate it with the given command.
     */
    create(commandName: string, location: ToolbarButtonLocation): Promise<void>;
}
