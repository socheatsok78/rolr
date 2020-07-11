export interface RolrInterface {
    /**
     * Check if has role
     * @param role
     */
    has(role: string): Boolean;

    /**
     * Add a new role to the list
     * @param role
     */
    add(role: string): this;

    /**
     * Delete a role from the list
     * @param role
     */
    delete(role: string): this;

    /**
     * Update to use new roles
     * @param roles
     */
    update(roles: string[]): this;
}
