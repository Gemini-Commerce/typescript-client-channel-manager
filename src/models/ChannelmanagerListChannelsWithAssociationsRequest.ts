/* tslint:disable */
/* eslint-disable */
/**
 * Channel Manager Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface ChannelmanagerListChannelsWithAssociationsRequest
 */
export interface ChannelmanagerListChannelsWithAssociationsRequest {
    /**
     * 
     * @type {string}
     * @memberof ChannelmanagerListChannelsWithAssociationsRequest
     */
    'tenantId'?: string;
    /**
     * The number of items to return per page. If not specified, it will returns all items.
     * @type {number}
     * @memberof ChannelmanagerListChannelsWithAssociationsRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChannelmanagerListChannelsWithAssociationsRequest
     */
    'pageToken'?: string;
}
