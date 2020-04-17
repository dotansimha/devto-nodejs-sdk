/**
 * DEV API (beta)
 * Access DEV articles, users and other resources via API.  All endpoints that don't require authentication are CORS enabled.  Dates and date times, unless otherwise specified, must be in the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 0.7.0
 * Contact: yo@dev.to
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ListingCategory } from './listingCategory'
import { SharedOrganization } from './sharedOrganization'
import { SharedUser } from './sharedUser'

export interface Listing {
  _typeOf: string
  id: number
  title: string
  slug: string
  bodyMarkdown: string
  tagList: string
  tags: Array<string>
  category: ListingCategory
  processedHtml: string
  published: boolean
  user: SharedUser
  organization?: SharedOrganization
}