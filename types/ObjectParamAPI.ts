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

import { ObservableChannelManagerApi } from "./ObservableAPI";
import { ChannelManagerApiRequestFactory, ChannelManagerApiResponseProcessor} from "../apis/ChannelManagerApi";

export interface ChannelManagerApiChannelManagerCreateAssociationRequest {
    /**
     * 
     * @type ChannelmanagerCreateAssociationRequest
     * @memberof ChannelManagerApichannelManagerCreateAssociation
     */
    body: ChannelmanagerCreateAssociationRequest
}

export interface ChannelManagerApiChannelManagerCreateChannelRequest {
    /**
     * 
     * @type ChannelmanagerCreateChannelRequest
     * @memberof ChannelManagerApichannelManagerCreateChannel
     */
    body: ChannelmanagerCreateChannelRequest
}

export interface ChannelManagerApiChannelManagerCreateMarketRequest {
    /**
     * 
     * @type ChannelmanagerCreateMarketRequest
     * @memberof ChannelManagerApichannelManagerCreateMarket
     */
    body: ChannelmanagerCreateMarketRequest
}

export interface ChannelManagerApiChannelManagerDeleteAssociationRequest {
    /**
     * 
     * @type ChannelmanagerDeleteAssociationRequest
     * @memberof ChannelManagerApichannelManagerDeleteAssociation
     */
    body: ChannelmanagerDeleteAssociationRequest
}

export interface ChannelManagerApiChannelManagerDeleteChannelRequest {
    /**
     * 
     * @type ChannelmanagerDeleteChannelRequest
     * @memberof ChannelManagerApichannelManagerDeleteChannel
     */
    body: ChannelmanagerDeleteChannelRequest
}

export interface ChannelManagerApiChannelManagerDeleteMarketRequest {
    /**
     * 
     * @type ChannelmanagerDeleteMarketRequest
     * @memberof ChannelManagerApichannelManagerDeleteMarket
     */
    body: ChannelmanagerDeleteMarketRequest
}

export interface ChannelManagerApiChannelManagerGetChannelRequest {
    /**
     * 
     * @type ChannelmanagerGetChannelRequest
     * @memberof ChannelManagerApichannelManagerGetChannel
     */
    body: ChannelmanagerGetChannelRequest
}

export interface ChannelManagerApiChannelManagerGetChannelWithAssociationsRequest {
    /**
     * 
     * @type ChannelmanagerGetChannelWithAssociationsRequest
     * @memberof ChannelManagerApichannelManagerGetChannelWithAssociations
     */
    body: ChannelmanagerGetChannelWithAssociationsRequest
}

export interface ChannelManagerApiChannelManagerGetMarketRequest {
    /**
     * 
     * @type ChannelmanagerGetMarketRequest
     * @memberof ChannelManagerApichannelManagerGetMarket
     */
    body: ChannelmanagerGetMarketRequest
}

export interface ChannelManagerApiChannelManagerGetMarketWithAssociationsRequest {
    /**
     * 
     * @type ChannelmanagerGetMarketWithAssociationsRequest
     * @memberof ChannelManagerApichannelManagerGetMarketWithAssociations
     */
    body: ChannelmanagerGetMarketWithAssociationsRequest
}

export interface ChannelManagerApiChannelManagerListChannelsRequest {
    /**
     * 
     * @type ChannelmanagerListChannelsRequest
     * @memberof ChannelManagerApichannelManagerListChannels
     */
    body: ChannelmanagerListChannelsRequest
}

export interface ChannelManagerApiChannelManagerListChannelsWithAssociationsRequest {
    /**
     * 
     * @type ChannelmanagerListChannelsWithAssociationsRequest
     * @memberof ChannelManagerApichannelManagerListChannelsWithAssociations
     */
    body: ChannelmanagerListChannelsWithAssociationsRequest
}

export interface ChannelManagerApiChannelManagerListMarketsRequest {
    /**
     * 
     * @type ChannelmanagerListMarketsRequest
     * @memberof ChannelManagerApichannelManagerListMarkets
     */
    body: ChannelmanagerListMarketsRequest
}

export interface ChannelManagerApiChannelManagerListMarketsWithAssociationsRequest {
    /**
     * 
     * @type ChannelmanagerListMarketsWithAssociationsRequest
     * @memberof ChannelManagerApichannelManagerListMarketsWithAssociations
     */
    body: ChannelmanagerListMarketsWithAssociationsRequest
}

export interface ChannelManagerApiChannelManagerUpdateChannelRequest {
    /**
     * 
     * @type ChannelmanagerUpdateChannelRequest
     * @memberof ChannelManagerApichannelManagerUpdateChannel
     */
    body: ChannelmanagerUpdateChannelRequest
}

export interface ChannelManagerApiChannelManagerUpdateMarketRequest {
    /**
     * 
     * @type ChannelmanagerUpdateMarketRequest
     * @memberof ChannelManagerApichannelManagerUpdateMarket
     */
    body: ChannelmanagerUpdateMarketRequest
}

export class ObjectChannelManagerApi {
    private api: ObservableChannelManagerApi

    public constructor(configuration: Configuration, requestFactory?: ChannelManagerApiRequestFactory, responseProcessor?: ChannelManagerApiResponseProcessor) {
        this.api = new ObservableChannelManagerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new association between a channel and a market or entities
     * CreateAssociation
     * @param param the request object
     */
    public channelManagerCreateAssociationWithHttpInfo(param: ChannelManagerApiChannelManagerCreateAssociationRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerAssociationResponse>> {
        return this.api.channelManagerCreateAssociationWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a new association between a channel and a market or entities
     * CreateAssociation
     * @param param the request object
     */
    public channelManagerCreateAssociation(param: ChannelManagerApiChannelManagerCreateAssociationRequest, options?: Configuration): Promise<ChannelmanagerAssociationResponse> {
        return this.api.channelManagerCreateAssociation(param.body,  options).toPromise();
    }

    /**
     * Create a new channel
     * CreateChannel
     * @param param the request object
     */
    public channelManagerCreateChannelWithHttpInfo(param: ChannelManagerApiChannelManagerCreateChannelRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponse>> {
        return this.api.channelManagerCreateChannelWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a new channel
     * CreateChannel
     * @param param the request object
     */
    public channelManagerCreateChannel(param: ChannelManagerApiChannelManagerCreateChannelRequest, options?: Configuration): Promise<ChannelmanagerChannelResponse> {
        return this.api.channelManagerCreateChannel(param.body,  options).toPromise();
    }

    /**
     * Create a new market
     * CreateMarket
     * @param param the request object
     */
    public channelManagerCreateMarketWithHttpInfo(param: ChannelManagerApiChannelManagerCreateMarketRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponse>> {
        return this.api.channelManagerCreateMarketWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create a new market
     * CreateMarket
     * @param param the request object
     */
    public channelManagerCreateMarket(param: ChannelManagerApiChannelManagerCreateMarketRequest, options?: Configuration): Promise<ChannelmanagerMarketResponse> {
        return this.api.channelManagerCreateMarket(param.body,  options).toPromise();
    }

    /**
     * Delete an existing association between a channel and a market or entities
     * DeleteAssociation
     * @param param the request object
     */
    public channelManagerDeleteAssociationWithHttpInfo(param: ChannelManagerApiChannelManagerDeleteAssociationRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.channelManagerDeleteAssociationWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Delete an existing association between a channel and a market or entities
     * DeleteAssociation
     * @param param the request object
     */
    public channelManagerDeleteAssociation(param: ChannelManagerApiChannelManagerDeleteAssociationRequest, options?: Configuration): Promise<any> {
        return this.api.channelManagerDeleteAssociation(param.body,  options).toPromise();
    }

    /**
     * Soft delete an existing channel
     * DeleteChannel
     * @param param the request object
     */
    public channelManagerDeleteChannelWithHttpInfo(param: ChannelManagerApiChannelManagerDeleteChannelRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.channelManagerDeleteChannelWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Soft delete an existing channel
     * DeleteChannel
     * @param param the request object
     */
    public channelManagerDeleteChannel(param: ChannelManagerApiChannelManagerDeleteChannelRequest, options?: Configuration): Promise<any> {
        return this.api.channelManagerDeleteChannel(param.body,  options).toPromise();
    }

    /**
     * Soft delete an existing market
     * DeleteMarket
     * @param param the request object
     */
    public channelManagerDeleteMarketWithHttpInfo(param: ChannelManagerApiChannelManagerDeleteMarketRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.channelManagerDeleteMarketWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Soft delete an existing market
     * DeleteMarket
     * @param param the request object
     */
    public channelManagerDeleteMarket(param: ChannelManagerApiChannelManagerDeleteMarketRequest, options?: Configuration): Promise<any> {
        return this.api.channelManagerDeleteMarket(param.body,  options).toPromise();
    }

    /**
     * Get an existing channel
     * GetChannel
     * @param param the request object
     */
    public channelManagerGetChannelWithHttpInfo(param: ChannelManagerApiChannelManagerGetChannelRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponse>> {
        return this.api.channelManagerGetChannelWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get an existing channel
     * GetChannel
     * @param param the request object
     */
    public channelManagerGetChannel(param: ChannelManagerApiChannelManagerGetChannelRequest, options?: Configuration): Promise<ChannelmanagerChannelResponse> {
        return this.api.channelManagerGetChannel(param.body,  options).toPromise();
    }

    /**
     * Get an existing channel with associations
     * GetChannelWithAssociations
     * @param param the request object
     */
    public channelManagerGetChannelWithAssociationsWithHttpInfo(param: ChannelManagerApiChannelManagerGetChannelWithAssociationsRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponseWithAssociations>> {
        return this.api.channelManagerGetChannelWithAssociationsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get an existing channel with associations
     * GetChannelWithAssociations
     * @param param the request object
     */
    public channelManagerGetChannelWithAssociations(param: ChannelManagerApiChannelManagerGetChannelWithAssociationsRequest, options?: Configuration): Promise<ChannelmanagerChannelResponseWithAssociations> {
        return this.api.channelManagerGetChannelWithAssociations(param.body,  options).toPromise();
    }

    /**
     * Get an existing market
     * GetMarket
     * @param param the request object
     */
    public channelManagerGetMarketWithHttpInfo(param: ChannelManagerApiChannelManagerGetMarketRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponse>> {
        return this.api.channelManagerGetMarketWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get an existing market
     * GetMarket
     * @param param the request object
     */
    public channelManagerGetMarket(param: ChannelManagerApiChannelManagerGetMarketRequest, options?: Configuration): Promise<ChannelmanagerMarketResponse> {
        return this.api.channelManagerGetMarket(param.body,  options).toPromise();
    }

    /**
     * Get an existing market with associations
     * GetMarketWithAssociations
     * @param param the request object
     */
    public channelManagerGetMarketWithAssociationsWithHttpInfo(param: ChannelManagerApiChannelManagerGetMarketWithAssociationsRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponseWithAssociations>> {
        return this.api.channelManagerGetMarketWithAssociationsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get an existing market with associations
     * GetMarketWithAssociations
     * @param param the request object
     */
    public channelManagerGetMarketWithAssociations(param: ChannelManagerApiChannelManagerGetMarketWithAssociationsRequest, options?: Configuration): Promise<ChannelmanagerMarketResponseWithAssociations> {
        return this.api.channelManagerGetMarketWithAssociations(param.body,  options).toPromise();
    }

    /**
     * List all channels
     * ListChannels
     * @param param the request object
     */
    public channelManagerListChannelsWithHttpInfo(param: ChannelManagerApiChannelManagerListChannelsRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerListChannelsResponse>> {
        return this.api.channelManagerListChannelsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List all channels
     * ListChannels
     * @param param the request object
     */
    public channelManagerListChannels(param: ChannelManagerApiChannelManagerListChannelsRequest, options?: Configuration): Promise<ChannelmanagerListChannelsResponse> {
        return this.api.channelManagerListChannels(param.body,  options).toPromise();
    }

    /**
     * List all channels with associations
     * ListChannelsWithAssociations
     * @param param the request object
     */
    public channelManagerListChannelsWithAssociationsWithHttpInfo(param: ChannelManagerApiChannelManagerListChannelsWithAssociationsRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerListChannelsWithAssociationsResponse>> {
        return this.api.channelManagerListChannelsWithAssociationsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List all channels with associations
     * ListChannelsWithAssociations
     * @param param the request object
     */
    public channelManagerListChannelsWithAssociations(param: ChannelManagerApiChannelManagerListChannelsWithAssociationsRequest, options?: Configuration): Promise<ChannelmanagerListChannelsWithAssociationsResponse> {
        return this.api.channelManagerListChannelsWithAssociations(param.body,  options).toPromise();
    }

    /**
     * List all markets
     * ListMarkets
     * @param param the request object
     */
    public channelManagerListMarketsWithHttpInfo(param: ChannelManagerApiChannelManagerListMarketsRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerListMarketsResponse>> {
        return this.api.channelManagerListMarketsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List all markets
     * ListMarkets
     * @param param the request object
     */
    public channelManagerListMarkets(param: ChannelManagerApiChannelManagerListMarketsRequest, options?: Configuration): Promise<ChannelmanagerListMarketsResponse> {
        return this.api.channelManagerListMarkets(param.body,  options).toPromise();
    }

    /**
     * List all markets with associations
     * ListMarketsWithAssociations
     * @param param the request object
     */
    public channelManagerListMarketsWithAssociationsWithHttpInfo(param: ChannelManagerApiChannelManagerListMarketsWithAssociationsRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerListMarketsWithAssociationsResponse>> {
        return this.api.channelManagerListMarketsWithAssociationsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List all markets with associations
     * ListMarketsWithAssociations
     * @param param the request object
     */
    public channelManagerListMarketsWithAssociations(param: ChannelManagerApiChannelManagerListMarketsWithAssociationsRequest, options?: Configuration): Promise<ChannelmanagerListMarketsWithAssociationsResponse> {
        return this.api.channelManagerListMarketsWithAssociations(param.body,  options).toPromise();
    }

    /**
     * Update an existing channel
     * UpdateChannel
     * @param param the request object
     */
    public channelManagerUpdateChannelWithHttpInfo(param: ChannelManagerApiChannelManagerUpdateChannelRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerChannelResponse>> {
        return this.api.channelManagerUpdateChannelWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update an existing channel
     * UpdateChannel
     * @param param the request object
     */
    public channelManagerUpdateChannel(param: ChannelManagerApiChannelManagerUpdateChannelRequest, options?: Configuration): Promise<ChannelmanagerChannelResponse> {
        return this.api.channelManagerUpdateChannel(param.body,  options).toPromise();
    }

    /**
     * Update an existing market
     * UpdateMarket
     * @param param the request object
     */
    public channelManagerUpdateMarketWithHttpInfo(param: ChannelManagerApiChannelManagerUpdateMarketRequest, options?: Configuration): Promise<HttpInfo<ChannelmanagerMarketResponse>> {
        return this.api.channelManagerUpdateMarketWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update an existing market
     * UpdateMarket
     * @param param the request object
     */
    public channelManagerUpdateMarket(param: ChannelManagerApiChannelManagerUpdateMarketRequest, options?: Configuration): Promise<ChannelmanagerMarketResponse> {
        return this.api.channelManagerUpdateMarket(param.body,  options).toPromise();
    }

}
