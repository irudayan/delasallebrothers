<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'delasallebrothers' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}L1T;?z$e>3cAdj-s2A%(mgTkXX%L:f4JCbYE+=!ntnR!WWSHpTid;K?i+ocA7cL' );
define( 'SECURE_AUTH_KEY',  'pydoFEpDY:rr-rbbBccr<wH@r>,Q`2M(GtH|oucb)mFoW%Oz(Ffg &FPgOGzHu/A' );
define( 'LOGGED_IN_KEY',    '^<ejb]nT%dr9{cDMH0u_>!J~MfT.SC?.ssB<|n!qN#i4JT*Of4U4-:Blolj1xXT[' );
define( 'NONCE_KEY',        '0rVEGB5>4Srnf^!hU$x^Ox7HO~b2?(]0*[_yV-UiT;i/`OMu5-IFi:FS_.s2Bx7m' );
define( 'AUTH_SALT',        'hOAW%/bZ} tWtP=It]QqdC/Z}F:L)(o<l@R|%:QN9#swmMU%,LGie;SrHgZzP38e' );
define( 'SECURE_AUTH_SALT', 'MiZN9^P);`PCyu%C1Mn2BJ{ovcr00/Q:7v21n6j0E+~z7U`fcDutAy9eRoVMh?@=' );
define( 'LOGGED_IN_SALT',   'e].;F%az0aqg+t52VfE{1I,WWuxH}+!?C!{Qj6^T*M8Te`A<R2M{d4]VzJAl,qHB' );
define( 'NONCE_SALT',       'ccDhJ!hWpd|I~kvc}JZH98(8R@PeSG;N5m|!x|f5)^g; At`:<)//(  #jlieQMP' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'mmi_';

define('WP_MEMORY_LIMIT', '512M');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';


