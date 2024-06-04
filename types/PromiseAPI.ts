import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChannelmanagerAssociationResponse } from '../models/ChannelmanagerAssociationResponse';
import { ChannelmanagerAssociationResponseAssociation } from '../models/ChannelmanagerAssociationResponseAssociation';
import { ChannelmanagerChannelResponse } from '../models/ChannelmanagerChannelResponse';
import { ChannelmanagerChannelResponseWithAssociations } from '../models/ChannelmanagerChannelResponseWithAssociations';
import { ChannelmanagerChannelResponseWithAssociationsAssociation } from '../models/ChannelmanagerChannelResponseWithAssociationsAssociation';
import { ChannelmanagerChannelSettings } from '../models/ChannelmanagerChannelSettings';
import { ChannelmanagerChannelStatus } from '../models/ChannelmanagerChannelStatus';
import { ChannelmanagerChannelTypeWebsite } from '../models/ChannelmanagerChannelTypeWebsite';
import { ChannelmanagerCountryCode } from '../models/ChannelmanagerCountryCode';
import { ChannelmanagerCreateAssociationRequest } from '../models/ChannelmanagerCreateAssociationRequest';
import { ChannelmanagerCreateChannelRequest } from '../models/ChannelmanagerCreateChannelRequest';
import { ChannelmanagerCreateMarketRequest } from '../models/ChannelmanagerCreateMarketRequest';
import { ChannelmanagerDeleteAssociationRequest } from '../models/ChannelmanagerDeleteAssociationRequest';
import { ChannelmanagerDeleteChannelRequest } from '../models/ChannelmanagerDeleteChannelRequest';
import { ChannelmanagerDeleteMarketRequest } from '../models/ChannelmanagerDeleteMarketRequest';
import { ChannelmanagerGetChannelRequest } from '../models/ChannelmanagerGetChannelRequest';
import { ChannelmanagerGetChannelWithAssociationsRequest } from '../models/ChannelmanagerGetChannelWithAssociationsRequest';
import { ChannelmanagerGetMarketRequest } from '../models/ChannelmanagerGetMarketRequest';
import { ChannelmanagerGetMarketWithAssociationsRequest } from '../models/ChannelmanagerGetMarketWithAssociationsRequest';
import { ChannelmanagerLanguageCode } from '../models/ChannelmanagerLanguageCode';
import { ChannelmanagerListChannelsRequest } from '../models/ChannelmanagerListChannelsRequest';
import { ChannelmanagerListChannelsResponse } from '../models/ChannelmanagerListChannelsResponse';
import { ChannelmanagerListChannelsWithAssociationsRequest } from '../models/ChannelmanagerListChannelsWithAssociationsRequest';
import { ChannelmanagerListChannelsWithAssociationsResponse } from '../models/ChannelmanagerListChannelsWithAssociationsResponse';
import { ChannelmanagerListMarketsRequest } from '../models/ChannelmanagerListMarketsRequest';
import { ChannelmanagerListMarketsResponse } from '../models/ChannelmanagerListMarketsResponse';
import { ChannelmanagerListMarketsWithAssociationsRequest } from '../models/ChannelmanagerListMarketsWithAssociationsRequest';
import { ChannelmanagerListMarketsWithAssociationsResponse } from '../models/ChannelmanagerListMarketsWithAssociationsResponse';
import { ChannelmanagerMarketResponse } from '../models/ChannelmanagerMarketResponse';
import { ChannelmanagerMarketResponseWithAssociations } from '../models/ChannelmanagerMarketResponseWithAssociations';
import { ChannelmanagerMarketResponseWithAssociationsAssociation } from '../models/ChannelmanagerMarketResponseWithAssociationsAssociation';
import { ChannelmanagerUpdateChannelRequest } from '../models/ChannelmanagerUpdateChannelRequest';
import { ChannelmanagerUpdateChannelRequestPayload } from '../models/ChannelmanagerUpdateChannelRequestPayload';
import { ChannelmanagerUpdateMarketRequest } from '../models/ChannelmanagerUpdateMarketRequest';
import { ChannelmanagerUpdateMarketRequestPayload } from '../models/ChannelmanagerUpdateMarketRequestPayload';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';
import { ObservableChannelManagerApi } from './ObservableAPI';

import { ChannelManagerApiRequestFactory, ChannelManagerApiResponseProcessor} from "../apis/ChannelManagerApi";
export class PromiseChannelManagerApi {
    private api: ObservableChannelManagerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChannelManagerApiRequestFactory,
        responseProcessor?: ChannelManagerApiResponseProcessor
    ) {
        this.api = new ObservableChannelManagerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new association between a channel and a market or entities
     * CreateAssociation
     * @param body 
     */
    public channelManagerCreateAssociationWithHttpInfo(body: ChannelmanagerCreateAssociationRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerAssociationResponse>> {
        const result = this.api.channelManagerCreateAssociationWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new association between a channel and a market or entities
     * CreateAssociation
     * @param body 
     */
    public channelManagerCreateAssociation(body: ChannelmanagerCreateAssociationRequest, _options?: Configuration): Promise<ChannelmanagerAssociationResponse> {
        const result = this.api.channelManagerCreateAssociation(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new channel
     * CreateChannel
     * @param body 
     */
    public channelManagerCreateChannelWithHttpInfo(body: ChannelmanagerCreateChannelRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponse>> {
        const result = this.api.channelManagerCreateChannelWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new channel
     * CreateChannel
     * @param body 
     */
    public channelManagerCreateChannel(body: ChannelmanagerCreateChannelRequest, _options?: Configuration): Promise<ChannelmanagerChannelResponse> {
        const result = this.api.channelManagerCreateChannel(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new market
     * CreateMarket
     * @param body 
     */
    public channelManagerCreateMarketWithHttpInfo(body: ChannelmanagerCreateMarketRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponse>> {
        const result = this.api.channelManagerCreateMarketWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create a new market
     * CreateMarket
     * @param body 
     */
    public channelManagerCreateMarket(body: ChannelmanagerCreateMarketRequest, _options?: Configuration): Promise<ChannelmanagerMarketResponse> {
        const result = this.api.channelManagerCreateMarket(body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing association between a channel and a market or entities
     * DeleteAssociation
     * @param body 
     */
    public channelManagerDeleteAssociationWithHttpInfo(body: ChannelmanagerDeleteAssociationRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.channelManagerDeleteAssociationWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Delete an existing association between a channel and a market or entities
     * DeleteAssociation
     * @param body 
     */
    public channelManagerDeleteAssociation(body: ChannelmanagerDeleteAssociationRequest, _options?: Configuration): Promise<any> {
        const result = this.api.channelManagerDeleteAssociation(body, _options);
        return result.toPromise();
    }

    /**
     * Soft delete an existing channel
     * DeleteChannel
     * @param body 
     */
    public channelManagerDeleteChannelWithHttpInfo(body: ChannelmanagerDeleteChannelRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.channelManagerDeleteChannelWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Soft delete an existing channel
     * DeleteChannel
     * @param body 
     */
    public channelManagerDeleteChannel(body: ChannelmanagerDeleteChannelRequest, _options?: Configuration): Promise<any> {
        const result = this.api.channelManagerDeleteChannel(body, _options);
        return result.toPromise();
    }

    /**
     * Soft delete an existing market
     * DeleteMarket
     * @param body 
     */
    public channelManagerDeleteMarketWithHttpInfo(body: ChannelmanagerDeleteMarketRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.channelManagerDeleteMarketWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Soft delete an existing market
     * DeleteMarket
     * @param body 
     */
    public channelManagerDeleteMarket(body: ChannelmanagerDeleteMarketRequest, _options?: Configuration): Promise<any> {
        const result = this.api.channelManagerDeleteMarket(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing channel
     * GetChannel
     * @param body 
     */
    public channelManagerGetChannelWithHttpInfo(body: ChannelmanagerGetChannelRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponse>> {
        const result = this.api.channelManagerGetChannelWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing channel
     * GetChannel
     * @param body 
     */
    public channelManagerGetChannel(body: ChannelmanagerGetChannelRequest, _options?: Configuration): Promise<ChannelmanagerChannelResponse> {
        const result = this.api.channelManagerGetChannel(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing channel with associations
     * GetChannelWithAssociations
     * @param body 
     */
    public channelManagerGetChannelWithAssociationsWithHttpInfo(body: ChannelmanagerGetChannelWithAssociationsRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponseWithAssociations>> {
        const result = this.api.channelManagerGetChannelWithAssociationsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing channel with associations
     * GetChannelWithAssociations
     * @param body 
     */
    public channelManagerGetChannelWithAssociations(body: ChannelmanagerGetChannelWithAssociationsRequest, _options?: Configuration): Promise<ChannelmanagerChannelResponseWithAssociations> {
        const result = this.api.channelManagerGetChannelWithAssociations(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing market
     * GetMarket
     * @param body 
     */
    public channelManagerGetMarketWithHttpInfo(body: ChannelmanagerGetMarketRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponse>> {
        const result = this.api.channelManagerGetMarketWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing market
     * GetMarket
     * @param body 
     */
    public channelManagerGetMarket(body: ChannelmanagerGetMarketRequest, _options?: Configuration): Promise<ChannelmanagerMarketResponse> {
        const result = this.api.channelManagerGetMarket(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing market with associations
     * GetMarketWithAssociations
     * @param body 
     */
    public channelManagerGetMarketWithAssociationsWithHttpInfo(body: ChannelmanagerGetMarketWithAssociationsRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponseWithAssociations>> {
        const result = this.api.channelManagerGetMarketWithAssociationsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get an existing market with associations
     * GetMarketWithAssociations
     * @param body 
     */
    public channelManagerGetMarketWithAssociations(body: ChannelmanagerGetMarketWithAssociationsRequest, _options?: Configuration): Promise<ChannelmanagerMarketResponseWithAssociations> {
        const result = this.api.channelManagerGetMarketWithAssociations(body, _options);
        return result.toPromise();
    }

    /**
     * List all channels
     * ListChannels
     * @param body 
     */
    public channelManagerListChannelsWithHttpInfo(body: ChannelmanagerListChannelsRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerListChannelsResponse>> {
        const result = this.api.channelManagerListChannelsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List all channels
     * ListChannels
     * @param body 
     */
    public channelManagerListChannels(body: ChannelmanagerListChannelsRequest, _options?: Configuration): Promise<ChannelmanagerListChannelsResponse> {
        const result = this.api.channelManagerListChannels(body, _options);
        return result.toPromise();
    }

    /**
     * List all channels with associations
     * ListChannelsWithAssociations
     * @param body 
     */
    public channelManagerListChannelsWithAssociationsWithHttpInfo(body: ChannelmanagerListChannelsWithAssociationsRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerListChannelsWithAssociationsResponse>> {
        const result = this.api.channelManagerListChannelsWithAssociationsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List all channels with associations
     * ListChannelsWithAssociations
     * @param body 
     */
    public channelManagerListChannelsWithAssociations(body: ChannelmanagerListChannelsWithAssociationsRequest, _options?: Configuration): Promise<ChannelmanagerListChannelsWithAssociationsResponse> {
        const result = this.api.channelManagerListChannelsWithAssociations(body, _options);
        return result.toPromise();
    }

    /**
     * List all markets
     * ListMarkets
     * @param body 
     */
    public channelManagerListMarketsWithHttpInfo(body: ChannelmanagerListMarketsRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerListMarketsResponse>> {
        const result = this.api.channelManagerListMarketsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List all markets
     * ListMarkets
     * @param body 
     */
    public channelManagerListMarkets(body: ChannelmanagerListMarketsRequest, _options?: Configuration): Promise<ChannelmanagerListMarketsResponse> {
        const result = this.api.channelManagerListMarkets(body, _options);
        return result.toPromise();
    }

    /**
     * List all markets with associations
     * ListMarketsWithAssociations
     * @param body 
     */
    public channelManagerListMarketsWithAssociationsWithHttpInfo(body: ChannelmanagerListMarketsWithAssociationsRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerListMarketsWithAssociationsResponse>> {
        const result = this.api.channelManagerListMarketsWithAssociationsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List all markets with associations
     * ListMarketsWithAssociations
     * @param body 
     */
    public channelManagerListMarketsWithAssociations(body: ChannelmanagerListMarketsWithAssociationsRequest, _options?: Configuration): Promise<ChannelmanagerListMarketsWithAssociationsResponse> {
        const result = this.api.channelManagerListMarketsWithAssociations(body, _options);
        return result.toPromise();
    }

    /**
     * Update an existing channel
     * UpdateChannel
     * @param body 
     */
    public channelManagerUpdateChannelWithHttpInfo(body: ChannelmanagerUpdateChannelRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponse>> {
        const result = this.api.channelManagerUpdateChannelWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update an existing channel
     * UpdateChannel
     * @param body 
     */
    public channelManagerUpdateChannel(body: ChannelmanagerUpdateChannelRequest, _options?: Configuration): Promise<ChannelmanagerChannelResponse> {
        const result = this.api.channelManagerUpdateChannel(body, _options);
        return result.toPromise();
    }

    /**
     * Update an existing market
     * UpdateMarket
     * @param body 
     */
    public channelManagerUpdateMarketWithHttpInfo(body: ChannelmanagerUpdateMarketRequest, _options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponse>> {
        const result = this.api.channelManagerUpdateMarketWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update an existing market
     * UpdateMarket
     * @param body 
     */
    public channelManagerUpdateMarket(body: ChannelmanagerUpdateMarketRequest, _options?: Configuration): Promise<ChannelmanagerMarketResponse> {
        const result = this.api.channelManagerUpdateMarket(body, _options);
        return result.toPromise();
    }


}



