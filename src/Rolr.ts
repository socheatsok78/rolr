import { RolrInterface } from './foundations/RolrInterface'

export default class Rolr implements RolrInterface {
    private roles!: Set<string>;

    /**
     * Create a new instance of Rolr
     * @param roles
     */
    constructor(roles: string[] = []) {
        this.update(roles)
    }

    /**
     * Check if has role
     * @param role
     */
    hasRole(role: string) {
        return this.roles.has(role)
    }

    /**
     * Add a new role to the list
     * @param role
     */
    add(role: string) {
        this.roles.add(role)

        return this
    }

    /**
     * Delete a role from the list
     * @param role
     */
    delete(role: string) {
        if (this.roles.has(role)) {
            this.roles.delete(role)
        }

        return this
    }

    /**
     * Update to use new roles
     * @param roles
     */
    update(roles: string[]) {
        this.roles = new Set(roles)

        return this
    }
}
