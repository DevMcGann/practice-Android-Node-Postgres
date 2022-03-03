package com.gsoft.pokeapp.util

import android.util.Log
import kotlinx.coroutines.flow.*



inline fun <DB, REMOTE> networkBoundResource(
    crossinline fetchFromLocal: () -> Flow<DB>,
    shouldFetchFromRemote: Boolean = true,
    crossinline fetchFromRemote: () -> Flow<ApiResponse<REMOTE>>,
    crossinline processRemoteResponse: (response: ApiSuccessResponse<REMOTE>) -> Unit = { },
    crossinline saveRemoteData: (REMOTE) -> Unit = { },
    crossinline onFetchFailed: (errorBody: String?, statusCode: Int) -> Unit = { _: String?, _: Int -> }
) = flow {

    emit(Resource.loading(null))

    val localData = fetchFromLocal().first()

    if (shouldFetchFromRemote) {

        emit(Resource.loading(localData))

        fetchFromRemote().collect { apiResponse ->
            when (apiResponse) {
                is ApiSuccessResponse -> {
                    processRemoteResponse(apiResponse)
                    apiResponse.body?.let { saveRemoteData(it) }
                    emitAll(fetchFromLocal().map { dbData ->
                        Resource.success(dbData)
                    })
                }

                is ApiErrorResponse -> {
                    //Timber.d("%s: %s", apiResponse.statusCode.toString(), apiResponse.errorMessage)
                    onFetchFailed(apiResponse.errorMessage, apiResponse.statusCode)
                    emitAll(fetchFromLocal().map {
                        Resource.error(
                            apiResponse.errorMessage,
                            it
                        )
                    })
                }
                is ApiEmptyResponse -> {
                    emitAll(fetchFromLocal().map { Resource.success(it) })
                }
            }
        }
    } else {
        emitAll(fetchFromLocal().map { Resource.success(it) })
    }
}