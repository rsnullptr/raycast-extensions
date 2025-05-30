export interface WPCommand {
  name: string;
  description: string;
  example?: string;
  subcommands?: WPCommand[];
}

export const wpCommands: WPCommand[] = [
  {
    name: "admin",
    description: "Open /wp-admin/ in a browser",
    example: "wp admin",
  },
  {
    name: "cache",
    description: "Adds, removes, fetches, and flushes the WP Object Cache object",
    example: "wp cache flush",
    subcommands: [
      { name: "add", description: "Adds a value to the object cache", example: "wp cache add my_key 'my value'" },
      { name: "decr", description: "Decrements a value in the object cache", example: "wp cache decr my_key 2" },
      { name: "delete", description: "Removes a value from the object cache", example: "wp cache delete my_key" },
      { name: "flush", description: "Flushes the object cache", example: "wp cache flush" },
      { name: "get", description: "Gets a value from the object cache", example: "wp cache get my_key" },
      { name: "incr", description: "Increments a value in the object cache", example: "wp cache incr my_key 3" },
      {
        name: "replace",
        description: "Replaces a value in the object cache",
        example: "wp cache replace my_key 'new value'",
      },
      { name: "set", description: "Sets a value to the object cache", example: "wp cache set my_key 'my value' 300" },
      { name: "type", description: "Attempts to determine which object cache is being used", example: "wp cache type" },
    ],
  },
  {
    name: "cap",
    description: "Adds, removes, and lists capabilities of a user role",
    example: "wp cap list editor",
    subcommands: [
      { name: "add", description: "Adds capabilities to a given role", example: "wp cap add editor publish_posts" },
      { name: "list", description: "Lists capabilities for a given role", example: "wp cap list editor" },
      {
        name: "remove",
        description: "Removes capabilities from a given role",
        example: "wp cap remove editor publish_posts",
      },
    ],
  },
  {
    name: "cli",
    description: "Reviews current WP-CLI info, checks for updates, or views defined aliases",
    subcommands: [
      { name: "alias", description: "Lists available WP-CLI aliases" },
      { name: "check-update", description: "Checks for updates to WP-CLI" },
      { name: "info", description: "Prints various details about the WP-CLI environment" },
      { name: "update", description: "Updates WP-CLI to the latest release" },
      { name: "version", description: "Displays the current WP-CLI version" },
    ],
  },
  {
    name: "comment",
    description: "Creates, updates, deletes, and moderates comments",
    subcommands: [
      { name: "approve", description: "Approves a comment" },
      { name: "count", description: "Counts comments" },
      { name: "create", description: "Creates a new comment" },
      { name: "delete", description: "Deletes a comment" },
      { name: "generate", description: "Generates some number of new dummy comments" },
      { name: "get", description: "Gets the data of a comment" },
      { name: "list", description: "Lists comments" },
      { name: "meta", description: "Adds, updates, deletes, and lists comment custom fields" },
      { name: "recount", description: "Recalculates the comment count" },
      { name: "spam", description: "Marks a comment as spam" },
      { name: "status", description: "Gets the status of a comment" },
      { name: "unapprove", description: "Unapproves a comment" },
      { name: "unspam", description: "Unmarks a comment as spam" },
      { name: "update", description: "Updates one or more comments" },
    ],
  },
  {
    name: "config",
    description: "Generates and reads the wp-config.php file",
    subcommands: [
      { name: "create", description: "Generates a wp-config.php file" },
      { name: "delete", description: "Deletes a specific constant from the wp-config.php file" },
      { name: "get", description: "Gets the value of a specific constant from the wp-config.php file" },
      { name: "list", description: "Lists all constants and their values defined in wp-config.php file" },
      { name: "path", description: "Gets the path to wp-config.php file" },
      { name: "set", description: "Sets the value of a specific constant in the wp-config.php file" },
    ],
  },
  // ... Adding more main commands with their subcommands
  {
    name: "core",
    description: "Downloads, installs, updates, and manages a WordPress installation",
    subcommands: [
      { name: "check-update", description: "Checks for WordPress core updates" },
      { name: "download", description: "Downloads core WordPress files" },
      { name: "install", description: "Installs WordPress" },
      { name: "is-installed", description: "Checks if WordPress is installed" },
      {
        name: "multisite-convert",
        description: "Converts an existing single-site installation into a multisite installation",
      },
      { name: "multisite-install", description: "Installs WordPress multisite from scratch" },
      { name: "update", description: "Updates WordPress to a newer version" },
      { name: "version", description: "Displays the WordPress version" },
    ],
  },
  {
    name: "cron",
    description: "Tests, runs, and deletes WP-Cron events; manages WP-Cron schedules",
    subcommands: [
      { name: "event delete", description: "Deletes a scheduled cron event" },
      { name: "event list", description: "Lists scheduled cron events" },
      { name: "event run", description: "Runs a scheduled cron event" },
      { name: "event schedule", description: "Schedules a new cron event" },
      { name: "event test", description: "Tests the WP Cron spawning system" },
      { name: "schedule list", description: "Lists available cron schedules" },
    ],
  },
  {
    name: "db",
    description: "Performs basic database operations using credentials stored in wp-config.php",
    subcommands: [
      { name: "check", description: "Checks the current status of the database" },
      { name: "create", description: "Creates a new database" },
      { name: "drop", description: "Deletes the existing database" },
      { name: "export", description: "Exports the database to a file or STDOUT" },
      { name: "import", description: "Imports a database from a file or STDIN" },
      { name: "optimize", description: "Optimizes the database" },
      { name: "prefix", description: "Displays the database table prefix" },
      { name: "repair", description: "Repairs the database" },
      { name: "reset", description: "Removes all tables from the database" },
      { name: "search", description: "Finds a string in the database" },
      { name: "size", description: "Displays the database size" },
      { name: "tables", description: "Lists the database tables" },
    ],
  },
  {
    name: "embed",
    description: "Inspects oEmbed providers, clears embed cache, and more",
    subcommands: [
      { name: "cache clear", description: "Clears the embed cache" },
      { name: "cache find", description: "Finds a cached embed for a given URL" },
      { name: "fetch", description: "Fetches the oEmbed data for a given URL" },
      { name: "provider list", description: "Lists all available oEmbed providers" },
      { name: "provider match", description: "Gets the matching provider for a given URL" },
    ],
  },
  {
    name: "eval",
    description: "Executes arbitrary PHP code",
  },
  {
    name: "eval-file",
    description: "Loads and executes a PHP file",
  },
  {
    name: "export",
    description: "Exports WordPress content to a WXR file",
  },
  {
    name: "find",
    description: "Find WordPress installations on the filesystem",
  },
  {
    name: "i18n",
    description: "Provides internationalization tools for WordPress projects",
    subcommands: [
      { name: "make-json", description: "Creates translation JSON files" },
      { name: "make-mo", description: "Creates MO files from PO files" },
      { name: "make-pot", description: "Creates a POT file for a WordPress project" },
      { name: "update-po", description: "Updates PO files from a POT file" },
    ],
  },
  {
    name: "import",
    description: "Imports content from a given WXR file",
  },
  {
    name: "language",
    description: "Installs, activates, and manages language packs",
    subcommands: [
      { name: "core activate", description: "Activates a given language" },
      { name: "core install", description: "Installs a given language" },
      { name: "core list", description: "Lists all available languages" },
      { name: "core uninstall", description: "Uninstalls a given language" },
      { name: "core update", description: "Updates installed languages" },
      { name: "plugin install", description: "Installs language files for a plugin" },
      { name: "plugin list", description: "Lists all available plugin translations" },
      { name: "plugin uninstall", description: "Uninstalls language files for a plugin" },
      { name: "plugin update", description: "Updates installed plugin translations" },
      { name: "theme install", description: "Installs language files for a theme" },
      { name: "theme list", description: "Lists all available theme translations" },
      { name: "theme uninstall", description: "Uninstalls language files for a theme" },
      { name: "theme update", description: "Updates installed theme translations" },
    ],
  },
  {
    name: "maintenance-mode",
    description: "Activates, deactivates or checks the status of the maintenance mode of a site",
    subcommands: [
      { name: "activate", description: "Activates maintenance mode" },
      { name: "deactivate", description: "Deactivates maintenance mode" },
      { name: "status", description: "Displays maintenance mode status" },
    ],
  },
  {
    name: "media",
    description: "Imports files as attachments, regenerates thumbnails, or lists registered image sizes",
    subcommands: [
      { name: "import", description: "Creates attachments from local files or URLs" },
      { name: "regenerate", description: "Regenerates thumbnails for one or more attachments" },
      { name: "image-size", description: "Lists registered image sizes" },
    ],
  },
  {
    name: "menu",
    description: "Lists, creates, assigns, and deletes the active theme's navigation menus",
    subcommands: [
      { name: "create", description: "Creates a new menu" },
      { name: "delete", description: "Deletes one or more menus" },
      { name: "item add-custom", description: "Adds a custom menu item" },
      { name: "item add-post", description: "Adds a post menu item" },
      { name: "item add-term", description: "Adds a taxonomy term menu item" },
      { name: "item delete", description: "Deletes one or more items from a menu" },
      { name: "item list", description: "Lists items for a menu" },
      { name: "item update", description: "Updates a menu item" },
      { name: "list", description: "Lists all menus" },
      { name: "location assign", description: "Assigns a menu to a location" },
      { name: "location list", description: "Lists all menu locations" },
      { name: "location remove", description: "Removes a menu from a location" },
    ],
  },
  {
    name: "network",
    description: "Perform network-wide operations",
    subcommands: [{ name: "meta", description: "Gets, adds, updates, deletes, and lists network custom fields" }],
  },
  {
    name: "option",
    description: "Retrieves and sets site options, including plugin and WordPress settings",
    subcommands: [
      { name: "add", description: "Adds a new option value" },
      { name: "delete", description: "Deletes an option" },
      { name: "get", description: "Gets an option value" },
      { name: "list", description: "Lists options and their values" },
      { name: "update", description: "Updates an option value" },
    ],
  },
  {
    name: "package",
    description: "Lists, installs, and removes WP-CLI packages",
    subcommands: [
      { name: "browse", description: "Browses WP-CLI packages available for installation" },
      { name: "install", description: "Installs a WP-CLI package" },
      { name: "list", description: "Lists installed WP-CLI packages" },
      { name: "uninstall", description: "Uninstalls a WP-CLI package" },
      { name: "update", description: "Updates all installed WP-CLI packages to their latest version" },
    ],
  },
  {
    name: "plugin",
    description: "Manages plugins, including installs, activations, and updates",
    subcommands: [
      { name: "activate", description: "Activates one or more plugins" },
      { name: "deactivate", description: "Deactivates one or more plugins" },
      { name: "delete", description: "Deletes plugin files without deactivating or uninstalling" },
      { name: "get", description: "Gets details about an installed plugin" },
      { name: "install", description: "Installs one or more plugins" },
      { name: "is-installed", description: "Checks if a plugin is installed" },
      { name: "list", description: "Lists plugins" },
      { name: "path", description: "Gets the path to a plugin" },
      { name: "search", description: "Searches the WordPress.org plugin directory" },
      { name: "status", description: "Reveals the status of one or more plugins" },
      { name: "toggle", description: "Toggles a plugin's activation state" },
      { name: "uninstall", description: "Uninstalls one or more plugins" },
      { name: "update", description: "Updates one or more plugins" },
    ],
  },
  {
    name: "post",
    description: "Manages posts, content, and meta",
    subcommands: [
      { name: "create", description: "Creates a new post" },
      { name: "delete", description: "Deletes an existing post" },
      { name: "edit", description: "Launches system editor to edit post content" },
      { name: "generate", description: "Generates some posts" },
      { name: "get", description: "Gets details about a post" },
      { name: "list", description: "Lists posts" },
      { name: "meta", description: "Adds, updates, deletes, and lists post custom fields" },
      { name: "term", description: "Manages post terms" },
      { name: "update", description: "Updates an existing post" },
    ],
  },
  {
    name: "post-type",
    description: "Retrieves details on the site's registered post types",
  },
  {
    name: "profile",
    description: "Quickly identify what's slow with WordPress",
  },
  {
    name: "rewrite",
    description: "Lists or flushes the site's rewrite rules, updates the permalink structure",
    subcommands: [
      { name: "flush", description: "Flushes rewrite rules" },
      { name: "list", description: "Lists rewrite rules" },
      { name: "structure", description: "Updates the permalink structure" },
    ],
  },
  {
    name: "role",
    description: "Manages user roles, including creating new roles and resetting to defaults",
    subcommands: [
      { name: "create", description: "Creates a new role" },
      { name: "delete", description: "Deletes an existing role" },
      { name: "exists", description: "Checks if a role exists" },
      { name: "list", description: "Lists all roles" },
      { name: "reset", description: "Resets any default role to default capabilities" },
    ],
  },
  {
    name: "scaffold",
    description: "Generates code for post types, taxonomies, plugins, child themes, etc",
    subcommands: [
      { name: "_s", description: "Generates starter theme based on _s" },
      { name: "block", description: "Generates PHP, JS and CSS code for registering a Gutenberg block" },
      { name: "child-theme", description: "Generates child theme based on an existing theme" },
      { name: "plugin", description: "Generates starter plugin code" },
      { name: "plugin-tests", description: "Generates files needed for running PHPUnit tests" },
      { name: "post-type", description: "Generates CPT files" },
      { name: "taxonomy", description: "Generates taxonomy files" },
      { name: "theme-tests", description: "Generates files needed for running PHPUnit tests" },
      { name: "underscores", description: "Generates starter theme based on _s" },
    ],
  },
  {
    name: "search-replace",
    description: "Searches/replaces strings in the database",
    subcommands: [{ name: "export", description: "Exports the database with search-replace modifications" }],
  },
  {
    name: "server",
    description: "Launches PHP's built-in web server for a specific WordPress installation",
  },
  {
    name: "shell",
    description: "Opens an interactive PHP console for running and testing PHP code",
  },
  {
    name: "sidebar",
    description: "Lists registered sidebars",
    subcommands: [{ name: "list", description: "Lists registered sidebars" }],
  },
  {
    name: "site",
    description: "Creates, deletes, empties, moderates, and lists one or more sites on a multisite installation",
    subcommands: [
      { name: "activate", description: "Activates one or more sites" },
      { name: "archive", description: "Archives one or more sites" },
      { name: "create", description: "Creates a site in a multisite installation" },
      { name: "deactivate", description: "Deactivates one or more sites" },
      { name: "delete", description: "Deletes one or more sites" },
      { name: "empty", description: "Empties a site of its content" },
      { name: "list", description: "Lists all sites in a multisite installation" },
      { name: "mature", description: "Sets one or more sites as mature" },
      { name: "spam", description: "Marks one or more sites as spam" },
      { name: "unarchive", description: "Unarchives one or more sites" },
      { name: "unmature", description: "Sets one or more sites as unmature" },
      { name: "unspam", description: "Removes one or more sites from spam" },
    ],
  },
  {
    name: "super-admin",
    description: "Lists, adds, or removes super admin users on a multisite installation",
    subcommands: [
      { name: "add", description: "Grants super admin privileges to one or more users" },
      { name: "list", description: "Lists users with super admin capabilities" },
      { name: "remove", description: "Removes super admin privileges from one or more users" },
    ],
  },
  {
    name: "taxonomy",
    description: "Retrieves information about registered taxonomies",
  },
  {
    name: "term",
    description: "Manages taxonomy terms and term meta, with create, delete, and list commands",
    subcommands: [
      { name: "create", description: "Creates a new term" },
      { name: "delete", description: "Deletes an existing term" },
      { name: "generate", description: "Generates some terms" },
      { name: "get", description: "Gets details about a term" },
      { name: "list", description: "Lists terms in a taxonomy" },
      { name: "meta", description: "Adds, updates, deletes, and lists term custom fields" },
      { name: "recount", description: "Recalculates number of posts assigned to each term" },
      { name: "update", description: "Updates an existing term" },
    ],
  },
  {
    name: "theme",
    description: "Manages themes, including installs, activations, and updates",
    subcommands: [
      { name: "activate", description: "Activates a theme" },
      { name: "delete", description: "Deletes one or more themes" },
      { name: "disable", description: "Disables a theme on a WordPress multisite installation" },
      { name: "enable", description: "Enables a theme on a WordPress multisite installation" },
      { name: "get", description: "Gets details about a theme" },
      { name: "install", description: "Installs one or more themes" },
      { name: "is-installed", description: "Checks if a theme is installed" },
      { name: "list", description: "Lists themes" },
      { name: "mod", description: "Manages theme mods" },
      { name: "path", description: "Gets the path to a theme" },
      { name: "search", description: "Searches the WordPress.org theme directory" },
      { name: "status", description: "Displays status of themes" },
      { name: "update", description: "Updates one or more themes" },
    ],
  },
  {
    name: "transient",
    description: "Adds, gets, and deletes entries in the WordPress Transient Cache",
    subcommands: [
      { name: "delete", description: "Deletes a transient value" },
      { name: "get", description: "Gets a transient value" },
      { name: "list", description: "Lists transients" },
      { name: "set", description: "Sets a transient value" },
      { name: "type", description: "Determines the type of transients implementation" },
    ],
  },
  {
    name: "user",
    description: "Manages users, along with their roles, capabilities, and meta",
    subcommands: [
      { name: "add-cap", description: "Adds a capability to a user" },
      { name: "add-role", description: "Adds a role for a user" },
      { name: "create", description: "Creates a new user" },
      { name: "delete", description: "Deletes one or more users" },
      { name: "generate", description: "Generates some users" },
      { name: "get", description: "Gets details about a user" },
      { name: "import-csv", description: "Imports users from a CSV file" },
      { name: "list", description: "Lists users" },
      { name: "list-caps", description: "Lists all capabilities for a user" },
      { name: "meta", description: "Adds, updates, deletes, and lists user custom fields" },
      { name: "remove-cap", description: "Removes a capability from a user" },
      { name: "remove-role", description: "Removes a role from a user" },
      { name: "reset-password", description: "Resets a user's password" },
      { name: "session", description: "Destroys all sessions for a user" },
      { name: "set-role", description: "Sets the user role" },
      { name: "spam", description: "Marks one or more users as spam" },
      { name: "unspam", description: "Removes one or more users from spam" },
      { name: "update", description: "Updates an existing user" },
    ],
  },
  {
    name: "widget",
    description: "Manages widgets, including adding and moving them within sidebars",
    subcommands: [
      { name: "add", description: "Adds a widget to a sidebar" },
      { name: "deactivate", description: "Deactivates one or more widgets from an active sidebar" },
      { name: "delete", description: "Deletes one or more widgets from a sidebar" },
      { name: "list", description: "Lists widgets" },
      { name: "move", description: "Moves a widget from one position to another" },
      { name: "reset", description: "Resets sidebar" },
      { name: "update", description: "Updates options for an existing widget" },
    ],
  },
];
