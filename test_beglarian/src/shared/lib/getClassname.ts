type Falsy = undefined | null | false | 0

function identity<T>(p: T) {
    return p
}

/**
 * Джойнит все переданные параметры, если они не falsy
 * @example
 * className={getClassName(
 *     styles.foo,
 *     bar() && styles.bar,
 *     props.className ?? styles.default,
 * )}
 */

export function getClassName(...args: Array<string | Falsy>) {
    if (!args.length) return

    return args.filter(identity).join(' ')
}
